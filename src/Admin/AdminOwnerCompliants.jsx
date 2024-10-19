import React from 'react'
import AdminHeader from './AdminHeader'
import AdminTopHead from './AdminTopHead'
import { Table } from 'react-bootstrap'

function AdminOwnerCompliants() {
  return (
    <>
    <div className="d-flex">
        <div className="" style={{ width: "20%" }}>
          <AdminHeader />
        </div>

        <div className="" style={{ width: "80%" }}>
          <AdminTopHead />

          <div className="text-center mt-5">
            <h4 className="fw-bold fs-3 text-primary">OWNER COMPLAINT DETAILS</h4>
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
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>COMPLAINT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>1</td>
                  <td>athulkrishna</td>
                  <td>athulkrishna2004@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo repellendus sequi tenetur numquam nesciunt qui, eius error maxime perferendis. Iure eos repudiandae vero perferendis voluptate, deserunt aut ad facere.</td>
                </tr>
              </tbody>
            </Table>
          </div>

          </div>
          </div>
    </>
  )
}

export default AdminOwnerCompliants
