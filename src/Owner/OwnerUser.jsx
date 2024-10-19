import React from "react";
import OwnerHeader from "./OwnerHeader";
import OwnerTopHead from "./OwnerTopHead";
import { Table } from "react-bootstrap";

function OwnerUser() {
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
            <Table striped bordered hover className="striped bordered hover  mt-5">
                <thead  >
                    <tr className="text-center">
                        <th>ID</th>
                        <th>USER NAME</th>
                        <th>EMAIL</th>


                    </tr>
                    
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>1</td>
                        <td>hai</td>
                        <td>hai@gmail.com</td>
                    </tr>
                </tbody>
            </Table>

          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerUser;
