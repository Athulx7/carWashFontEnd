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
      console.log(result.data)
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
      <div className="searchbar  d-flex justify-content-center align-items-center text-center mt-5 ">
        <div className="loacation w-100 d-flex ">
          <input
            type="text"
            placeholder="ENTER THE LOCATION"
            value={location}
            onChange={(e)=>setLocation(e.target.value.toLowerCase())}
            className="form-control border-secondary text-center fs-5"
          />
        </div>
        <div className="date w-100 ms-2 ">
          <input
            type="date"
            name=""
            id=""
            placeholder="SELECT DATE"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            className="form-control border-secondary text-center fs-5"
          />
        </div>
        <div className="time w-100 ms-2">
          <input
            type="time"
            name=""
            id=""
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            className="form-control text-center border-secondary fs-5"
          />
        </div>
        <div className="searchButton w-50">
          <button className="btn btn-primary w-100 ms-4" > SEARCH</button>
        </div>
      </div>

      <div className="main1 p-4">
        <h4 className="text-center fw-bolder text-primary mt-5 ">
          VARIOUS CAR WASH CENTERS{" "}
        </h4>
        <hr />
        <Row>
          
          {
            filterCenter?.length > 0 ?
            filterCenter.map((item)=>(
              <Col key={item._id}>
            <div className="p-5">
              <Card style={{ width: "23rem" }}>
                <Link to={`/selectedwash/${item._id}`}>
                  <Card.Img
                    variant="top"
                    className="p-3"
                    width={360}
                        height={280}
                    src={`${BASE_URL}/uploads/${item.image2}`}
                  />
                </Link>
                <Card.Body>
                  <div className="d-flex justify-content-evenly ">
                    <div className="ratinng rounded ">
                      <p className="ms-2 mt-1 text-light">
                        4.1{" "}
                        <FontAwesomeIcon icon={faStar} className="text-light" />
                      </p>
                    </div>

                    <Link to={`/selectedwash/${item._id}`} className="link1">
                      <Card.Title className="text-center">
                        {item.washcentername}
                      </Card.Title>
                      <h6 className="text-center">{item.location}</h6>
                    </Link>
                  </div>

                  <Card.Text>
                    

                    <hr />
                    <p className="text-center">
                      <span className="fw-bold">&#8377; {item.price}</span>
                    </p>
                  </Card.Text>
                  <Link to={`/selectedwash/${item._id}`}>
                    <Button
                      variant="primary"
                      style={{ width: "100%" }}
                      className=""
                    >
                      BOOK YOUR SLOT
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>

            ))
            :
            <div className="container d-flex align-items-center justify-content-center flex-column">
             <img src="https://charatoon.com/photo/thum/5214.png" alt="" />
             <h5 className="fw-bold">There is no centers Available</h5>
            </div>
          }
          
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default ShowmoreHomeWash;
