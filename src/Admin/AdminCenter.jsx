import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminTopHead from "./AdminTopHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { json, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { deleteAddedOWnerAPI, getAllusers } from "../Services/allAPI";
import { toast } from "react-toastify";

function AdminCenter() {
  const [ownerDetails, setOwnerdetails] = useState([]);
  const getowenerdatafetch = async () => {
    const result = await getAllusers();
    setOwnerdetails(result.data);
  };
  const filterOwner = ownerDetails.filter((owner) => owner.role === "owner");
  // console.log(filterOwner);

  useEffect(() => {
    getowenerdatafetch();
  }, [ownerDetails]);

  const handleDeleteOwner = async (id) => {
    const result = await deleteAddedOWnerAPI(id);
    if (result.status === 200) {
      toast.success(`owner sucessfully removed`);
    } else {
      toast.error("something went wrong");
    }
  };
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
              <h4 className="fw-bold fs-3 text-primary">CENTER DETAILS</h4>
              <hr />
            </div>

            <div className="d-flex justify-content-start mb-4">
              <Link to="/adminaddowner">
                <button className="btn btn-primary">
                  ADD CENTER AND OWNER{" "}
                  <FontAwesomeIcon icon={faUserPlus} className="ms-2" />
                </button>
              </Link>
            </div>

            <div className="container">
              {filterOwner?.length > 0 ? (
                <Table responsive striped bordered hover className="mt-4">
                  <thead>
                    <tr className="text-center">
                      <th>ID</th>
                      <th>CENTER NAME</th>
                      <th>OWNER NAME</th>
                      <th>OWNER EMAIL</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterOwner.map((owner, i) => (
                      <tr key={owner._id} className="text-center">
                        <td>{i + 1}</td>
                        <td>{owner.washcentername}</td>
                        <td>{owner.username}</td>
                        <td>{owner.email}</td>
                        <td>
                          <button
                            className="btn btn-danger fw-bold"
                            onClick={() => handleDeleteOwner(owner._id)}
                          >
                            REMOVE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                  <img
                    src="https://phoenixrogue.com/cdn/shop/files/process-images-01_798195b3-ab81-4b36-819f-fe88c7b2b9de.png?v=1708905593&width=1200"
                    alt="No owners found"
                    className="img-fluid mb-4"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <p className="fs-4 fw-bold text-center">
                    No owners found. Please add an owner{" "}
                    <Link to="/adminaddowner">here</Link>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCenter;
