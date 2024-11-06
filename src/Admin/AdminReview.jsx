import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminTopHead from './AdminTopHead'
import { Table } from 'react-bootstrap'
import { getWebsiteReviewAdmin } from '../Services/allAPI'

function AdminReview() {


  const [webreview,setwebreview] = useState([])
  const gettingwebReview = async()=>{
    const result = await getWebsiteReviewAdmin()
    setwebreview(result.data)
  }

  // console.log(webreview)




  useEffect(()=>{
    gettingwebReview()

  },[])
  return (
    <>
     <div className="d-flex">
        <div className="" style={{ width: "20%" }}>
          <AdminHeader />
        </div>

        <div className="" style={{ width: "80%" }}>
          <AdminTopHead />

         
<div className="container mt-5">
      <div className="text-center mt-5">
        <h4 className="fw-bold fs-3 text-primary">REVIEW DETAILS</h4>
        <hr />
      </div>

      <div className="container">
        { webreview?.length > 0 ? (
          <Table responsive striped bordered hover className="mt-5">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>USER REVIEW</th>
                <th style={{ width: "100px" }}>RATING</th>
              </tr>
            </thead>
            <tbody>
              {webreview.map((item, i) => (
                <tr key={i} className="text-center">
                  <td>{i + 1}</td>
                  <td>{item?.username}</td>
                  <td>{item?.useremail}</td>
                  <td>{item?.webreview}</td>
                  <td>{item?.webreviewstar}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <img
              src="https://phoenixrogue.com/cdn/shop/files/process-images-01_798195b3-ab81-4b36-819f-fe88c7b2b9de.png?v=1708905593&width=1200"
              alt="No reviews found"
              className="img-fluid mb-4"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <p className="fs-4 fw-bold text-center">
              No reviews found.
            </p>
          </div>
        )}
      </div>
    </div>

        </div>

    </div>      
    
    </>
  )
}

export default AdminReview
