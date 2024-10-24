import React, { useEffect, useState } from 'react'
import OwnerHeader from './OwnerHeader'
import OwnerTopHead from './OwnerTopHead'
import { Table } from 'react-bootstrap'
import { getBookingForCenter } from '../Services/allAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function OwnerBooking() {

  const token = sessionStorage.getItem("token");

  const [loading, setLoading] = useState(true);

  const [booking,setBooking]=useState([])

  const getbooking = async ()=>{
    try {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await getBookingForCenter(reqHeader);
      if (result && result.data) {
        setBooking(result.data);
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
    getbooking()
  },[])
  useEffect(()=>{
    // console.log(booking)
  },[booking])
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
           TOTAL BOOKING DETAILS
          </h4>
          <hr />
        </div>


        <div className="pe-4 ps-4">
          {
            booking?.length>0?
            <Table
                striped
                bordered
                hover
                className="striped bordered hover  mt-5"
              >
                <thead>
                  <tr className="text-center">
                    <th>ID</th>
                    <th>USER NAME</th>
                    <th>USER EMAIL</th>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                {
                  booking?.map((item,i)=>(

                    <tbody>
                    <tr className="text-center">
                      <td className="pt-3">{i + 1}</td>
                      <td className="pt-3">{item.username}</td>
                      <td className="pt-3">{item.useremail}</td>
                      <td className='pt-3'>{item.date}</td>
                      <td className="pt-3">{item.time}</td>
                      <td>
                        {
                    
                          item.action===false?
                          <Link to={'/ownerviewavailability'}>
                          <button className="btn btn-primary" >ON PROGRESS <FontAwesomeIcon icon={faSpinner} className="ms-2" /></button>
                          </Link>
                          
                          :
                          <button className="btn btn-success">FINISHED <FontAwesomeIcon icon={faSquareCheck} className="ms-2" /></button>


                        }

                    {/*  */}

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
  )
}

export default OwnerBooking
