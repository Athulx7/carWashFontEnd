import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminTopHead from "./AdminTopHead";
import { Table } from "react-bootstrap";
import { getAllusers } from "../Services/allAPI";
import { Link } from "react-router-dom";

function AdminUsers() {


  const [userData,setUserdata] = useState([])
  const getUserdataforfetch = async()=>{
    const result = await getAllusers()
    setUserdata(result.data)

  }

  const filterUser = userData.filter(user => user.role === 'user')
  // console.log(filterUser)

  useEffect(()=>{
    getUserdataforfetch()
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

          <div className="mx-3">
            <Link to={'/adminusercomplaint'}>
            <button className="btn btn-primary fw-bold">
            VIEW USER COMPLAINTS

            </button>
            
            </Link>
           
          </div>

          <div className="container">


            
            {
              filterUser?.length>0?
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
                </tr>
              </thead>
              {
                filterUser.map((item,i)=>(
                  <tbody>
                <tr className="text-center">
                  <td>{i+1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              </tbody>

                ))
              }
              
            </Table>
            :
            <div className="d-flex align-items-center justify-content-center">
              <img width={500} src="https://phoenixrogue.com/cdn/shop/files/process-images-01_798195b3-ab81-4b36-819f-fe88c7b2b9de.png?v=1708905593&width=1200" alt="" />
            </div>
            }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUsers;
