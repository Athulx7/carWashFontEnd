import React from "react";
import OwnerHeader from "./OwnerHeader";
import OwnerTopHead from "./OwnerTopHead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";

function OwnerVIewAvailability() {
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

              <tbody>
                <tr className="text-center">
                  <td>1</td>
                  <td>athul</td>
                  <td>athul@gmail.com</td>
                  <td>21-01-2024</td>
                  <td>12:00</td>
                  <td>
                    <button className="btn btn-primary">FINISHED <FontAwesomeIcon icon={faSquareCheck} className="ms-2" /></button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerVIewAvailability;
