import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoap, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getMoreCenterAPI, searching } from "../Services/allAPI";
import { BASE_URL } from "../Services/baseURL";
import { toast } from "react-toastify";
function ShowmoreHomeWash() {


  const [moreCenters,setMoreCenters] = useState([])
  const [filterCenter,setFiltercenter] = useState([])

  const getMoreCenters = async() =>{
    const result = await getMoreCenterAPI()
    if(JSON.stringify(result.data) !== JSON.stringify(moreCenters)){
      setMoreCenters(result.data)
      setFiltercenter(result.data)
      setLoading(false)

    }
    
    // console.log(moreCenters)


  }

  useEffect(()=>{
    getMoreCenters()
  },[])



  //searching 

  const [location,setLocation]= useState('')
  const [date,setDate] = useState('')
  const [time,setTime]=useState('')
  const [loading,setLoading]=useState(true)
  const [searched,setSearched]=useState(false)
  // console.log(location,date,time)
  const searchResult = async()=>{
    setSearched(true)
    try{
      const result = await searching(location,date,time)
      // console.log(result.data)
      if(result.status === 200){
      
        setFiltercenter(result.data)
        setSearched(true)

      }

      else {
        console.error('Error fetching available centers.');
        
      }
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(()=>{
    if(location && date && time){
      searchResult()
      
    }
    else{
      setFiltercenter(moreCenters)
      setSearched(false)
    }
  
    
  },[location,date,time,moreCenters])
  return (
    <>
     


<Header />

<div className="container searchbar d-flex flex-wrap justify-content-center align-items-center text-center my-5">
  <div className="location col-12 col-md-3 mb-3">
    <input
      type="text"
      placeholder="ENTER THE LOCATION"
      value={location}
      onChange={(e) => setLocation(e.target.value.toLowerCase())}
      className="form-control border-secondary text-center fs-5"
    />
  </div>
  <div className="date col-12 col-md-3 mb-3 ms-md-2">
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="form-control border-secondary text-center fs-5"
    />
  </div>
  <div className="time col-12 col-md-3 mb-3 ms-md-2">
    <input
      type="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className="form-control border-secondary text-center fs-5"
    />
  </div>
  <div className="searchButton col-12 ms-3 mb-3 col-md-2">
    <button className="btn btn-primary w-100">SEARCH</button>
  </div>
</div>

<div className="main1 p-4">
  <h4 className="text-center fw-bolder text-primary mt-5">VARIOUS CAR WASH CENTERS</h4>
  <hr />

  <Row>
    {filterCenter?.length > 0 ? (
      filterCenter.map((item) => (
        <Col key={item._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
            <Link to={`/selectedwash/${item._id}`}>
              <Card.Img
                variant="top"
                className="p-3"
                width={360}
                height={280}
                src={`${BASE_URL}/uploads/${item.image2}`}
              />
            </Link>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-evenly align-items-center">
                <div className="rating rounded  text-dark p-1">
                  <p className="m-0">
                     <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </p>
                </div>
                <Link to={`/selectedwash/${item._id}`} className="text-decoration-none text-dark">
                  <Card.Title className="text-center">{item.washcentername}</Card.Title>
                  <h6 className="text-center">{item.location}</h6>
                </Link>
              </div>
              <Card.Text className="mt-3">
                <p className="text-center">
                  <span className="fw-bold">&#8377; {item.price}</span>
                </p>
              </Card.Text>
              <Link to={`/selectedwash/${item._id}`} className="mt-auto">
                <Button variant="primary" className="w-100 fw-bold">BOOK YOUR SLOT</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <div className="container d-flex align-items-center justify-content-center flex-column text-center">
        <img src="https://charatoon.com/photo/thum/5214.png" alt="No centers available" className="img-fluid mb-3" />
        <h5 className="fw-bold">There are no centers available</h5>
      </div>
    )}
  </Row>
</div>

<Footer />
    </>
  );
}

export default ShowmoreHomeWash;
