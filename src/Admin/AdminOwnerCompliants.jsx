import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import AdminTopHead from './AdminTopHead'
import { Table } from 'react-bootstrap'
import { getOwnerComplaint } from '../Services/allAPI'
import { useFetcher } from 'react-router-dom'

function AdminOwnerCompliants() {

  const [ownercomplains,setownercomplains] = useState('')

  const getownersComplains = async()=>{
    const result = await getOwnerComplaint()
    setownercomplains(result.data)
  }

  

  useEffect(()=>{
    getownersComplains()
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
            <h4 className="fw-bold fs-3 text-primary">OWNER COMPLAINT DETAILS</h4>
            <hr />
          </div>

            {
              ownercomplains?.length > 0?
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
                  <th style={{width:'150px'}}>OWNER NAME</th>
                  <th style={{width:'150px'}}>CENTER NAME</th>
                  <th>COMPLAINT</th>
                </tr>
              </thead>
              {
                ownercomplains?.map((item,i)=>(
                  <tbody>
                  <tr className="text-center">
                    <td>{i+1}</td>
                    <td>{item.ownername}</td>
                    <td>{item.centername}</td>
                    <td>{item.complaint}</td>
                  </tr>
                </tbody>

                ))
              }
             
            </Table>
          </div>
          :
          <div className="d-flex align-items-center justify-content-center flex-column">
          <img width={500} src="https://phoenixrogue.com/cdn/shop/files/process-images-01_798195b3-ab81-4b36-819f-fe88c7b2b9de.png?v=1708905593&width=1200" alt="" />
          <p className='fs-4 fw-bold '>There is no complaints</p>
        </div>
            }

          

          </div>
          </div>
    </>
  )
}

export default AdminOwnerCompliants
