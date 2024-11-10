import React, { useEffect, useState } from "react";
import OwnerHeader from "./OwnerHeader";
import OwnerTopHead from "./OwnerTopHead";
import { Table } from "react-bootstrap";
import { getBookingForCenter } from "../Services/allAPI";

function OwnerUser() {

  const token = sessionStorage.getItem("token")

  const [userdetails,setuserdetails] = useState([])
  const getuserdetails = async()=>{

    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await getBookingForCenter(reqHeader)
    // console.log(result)
    if(result && result.data){
    setuserdetails(result.data)
    }
    else{
      console.log("error")
    }

  }


  useEffect(()=>{
    getuserdetails()
  },[])

  useEffect(()=>{
  // console.log(userdetails)
    
  },[userdetails])

  
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
              USER DETAILS
            </h4>
            <hr />
          </div>

          <div className="userdetail container ">
            {
              userdetails?.length>0?
              <Table striped bordered hover className="striped bordered hover  mt-5">
                <thead  >
                    <tr className="text-center">
                        <th>ID</th>
                        <th>USER NAME</th>
                        <th>EMAIL</th>


                    </tr>
                    
                </thead>
                {
                  userdetails?.map((item,i)=>(
                    <tbody>
                    <tr className="text-center">
                        <td>{i+1}</td>
                        <td>{item.username}</td>
                        <td>{item.useremail}</td>
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
                <p className="fs-4 fw-bold ">There is no users available</p>
              </div>

            }
            

          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerUser;
