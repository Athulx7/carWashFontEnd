import React from 'react'
import AdminHeader from './AdminHeader'
import AdminTopHead from './AdminTopHead'
import { Table } from 'react-bootstrap'

function AdminReview() {
  return (
    <>
     <div className="d-flex">
        <div className="" style={{ width: "20%" }}>
          <AdminHeader />
        </div>

        <div className="" style={{ width: "80%" }}>
          <AdminTopHead />

          <div className="text-center mt-5">
            <h4 className="fw-bold fs-3 text-primary">REVIEW DETAILS</h4>
            <hr />
          </div>


          <div className="container">
              <Table
                striped
                bordered
                hover
                className="striped bordered hover mt-5"
              >
                <thead>
                  <tr className="text-center">
                    <th>ID</th>
                    <th> NAME</th>
                    <th>EMAIL</th>
                    <th> USER REVIEW</th>
                    <th style={{width:'100px'}}>RATING</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>1</td>
                    <td>hai</td>
                    <td>hai@gmail.com</td>
                    <td>jbkajhbkubvdfkabvdfkbvdkfvbdfkbjbfjsbdkfhjbsdhfvbsdkhvsbhserdtyfugiohygfthdgxgy</td>
                    <td>5</td>
                  </tr>

                  <tr className="text-center">
                    <td>1</td>
                    <td>hai</td>
                    <td>hai@gmail.com</td>
                    <td>jbkajhbkubvdfkabvdfkbvdkfvbdfkbjbfjsbdkfhjbsdhfvbsdkhvsbhserdtyfugiohygfthdgxgy</td>
                    <td>5</td>
                  </tr>

                  <tr className="text-center">
                    <td>1</td>
                    <td>hai</td>
                    <td>hai@gmail.com</td>
                    <td>jbkajhbkubvdfkabvdfkbvjbfjsbdkfhjbsdhfvbsdkhvsbhserdtyfugiohygfthdgxgy</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </Table>
            </div>

        </div>

    </div>      
    
    </>
  )
}

export default AdminReview
