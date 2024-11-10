import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminTopHead from "./AdminTopHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Tab, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMessagesAPI } from "../Services/allAPI";

function AdminUserComplaint() {

  const [messgaes,setmessages] = useState([])

  const gettingmessages = async()=>{
    const result = await getMessagesAPI()
    // console.log(result)
    setmessages(result.data)
  }
  // console.log(messgaes)

  useEffect(()=>{
    gettingmessages()
  },[])
  return (
    <>
      <div className="d-flex">
        <div className="" style={{ width: "20%" }}>
          <AdminHeader />
        </div>

        <div className="" style={{ width: "80%" }}>
          <AdminTopHead />

          <div className="text-center mt-5">
            <h4 className="fw-bold fs-3 text-primary">USER DETAILS</h4>
            <hr />
          </div>

          <div className="mx-2">
            <Link to={"/adminuser"}>
              <button className="btn btn-primary fw-bold">
                <FontAwesomeIcon icon={faArrowLeft} className="me-1" /> back to
              </button>
            </Link>
          </div>

          <div className="container">
            {
              messgaes?.length>0?
              <Table
              striped
              bordered
              hover
              className="striped bordered hover mt-5"
            >
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>USER NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>MESSAGE</th>
                </tr>
              </thead>
              {
                messgaes?.map((item,i)=>(
                  <tbody>
                  <tr className="text-center">
                    <td>{i+1}</td>
                    <td>{item.userename}</td>
                    <td>{item.useremail}</td>
                    <td>{item.phone}</td>
                    <td>{item.messages}</td>
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
              <p className="fs-5 fw-bold">No user messgaes are available</p>
            </div>
            }
           
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUserComplaint;
