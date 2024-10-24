import React, { useEffect, useState } from "react";
import OwnerHeader from "./OwnerHeader";
import OwnerTopHead from "./OwnerTopHead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import { deleteUpdateAPI, getSearchForAvailbli } from "../Services/allAPI";

function OwnerVIewAvailability() {

  const token = sessionStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  const [available,setAvailable]=useState([])

  const getAvailable = async ()=>{
    
    try {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await getSearchForAvailbli(reqHeader);
      if (result && result.data) {
        setAvailable(result.data);
      } else {
        console.log("errorrr");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    getAvailable()
  },[])
  useEffect(()=>{
    // console.log(available)
  },[available])

  //delte 

  const handleAvailability = async(id)=>{
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await deleteUpdateAPI(id,reqHeader)
   if(result.status ===200){
    const deltedded = available?.filter(center => center.centerID !== id)
    setAvailable(deltedded)
   }

  }


  return (
    <>
      <div className="d-flex">
        <div className="" style={{ width: "20%" }}>
          <OwnerHeader />
        </div>

        <div className="" style={{ width: "80%" }}>
          <OwnerTopHead />

          <div className="">
            <h4 className="text-center fw-bold text-primary mt-3">
              CAR WASH CENTER DETAILS
            </h4>
            <hr />
          </div>

          <div className="d-flex">
            <h6 className="fw-bold ms-3 ">
              <u>AVAILABILITY DETAILS</u>
            </h6>
            <Link to={"/ownercenter"} className="ms-auto me-3">
              <button className="btn btn-primary ">
                <FontAwesomeIcon icon={faArrowLeft} className="me-3" /> Back to
                center page
              </button>
            </Link>
          </div>

          <div className="mt-5 p-3">
            {
              available?.length>0?
              <Table striped borderd hoverd>
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>USER NAME</th>
                  <th>EMAIL</th>
                  <th>DATE </th>
                  <th>TIME</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              {
                available?.map((item,i)=>(
                  <tbody>
                <tr className="text-center">
                  <td>{i+1}</td>
                  <td>{item.username}</td>
                  <td>{item.useremail}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <button className="btn btn-primary" onClick={()=>handleAvailability(item.centerID)}>FINISHED <FontAwesomeIcon icon={faSquareCheck} className="ms-2" /></button>
                  </td>
                </tr>
              </tbody>

                ))
              }

              
            </Table>

            :
            <div className="d-flex align-items-center justify-content-center flex-column">
                <img
                  width={500}
                  src="https://phoenixrogue.com/cdn/shop/files/process-images-01_798195b3-ab81-4b36-819f-fe88c7b2b9de.png?v=1708905593&width=1200"
                  alt=""
                />
                <p className="fs-4 fw-bold ">There is no bookings available</p>
              </div>
            }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerVIewAvailability;
