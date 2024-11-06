import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminTopHead from "./AdminTopHead";
import { toast } from "react-toastify";
import { addOwnerByAdmin } from "../Services/allAPI";

function AdminAddcenterOwner() {
  const navigate = useNavigate();
  const [addOwnerDetails, setAddOwnerDetails] = useState({
    centername: "",
    username: "",
    email: "",
    password: "",
    role: "owner",
  });

  const handleAddOwner = async (e) => {
    e.preventDefault();
    const { centername, username, email, password } = addOwnerDetails;
    if (!centername || !username || !email || !password) {
      toast.error("please fill the form completely");
    } else {
      const result = await addOwnerByAdmin(addOwnerDetails);
      if (result.status === 201) {
        setAddOwnerDetails({
          centername: "",
          username: "",
          email: "",
          password: "",
        });
      }
      toast.success(`owner ${addOwnerDetails.username} added successfully`);
      navigate("/admincenter");
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

          <div className="text-center mt-5">
            <h4 className="fw-bold fs-3 text-primary">CENTER DETAILS</h4>
            <hr />
          </div>

          <div className="container">
            <div className="ms-5">
              <Link to={"/admincenter"}>
                <button className="btn btn-primary">
                  {" "}
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Back to Center page
                </button>
              </Link>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-5">
              <form action="" style={{ width: "35rem" }}>
                <input
                  type="text"
                  className="form-control mt-5"
                  name=""
                  id=""
                  placeholder="Enter the WASH CENTER Name"
                  value={addOwnerDetails.centername}
                  onChange={(e) =>
                    setAddOwnerDetails({
                      ...addOwnerDetails,
                      centername: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name=""
                  id=""
                  placeholder="Enter the OWNER Name"
                  value={addOwnerDetails.username}
                  onChange={(e) =>
                    setAddOwnerDetails({
                      ...addOwnerDetails,
                      username: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name=""
                  id=""
                  placeholder="Enter the OWNER Email"
                  value={addOwnerDetails.email}
                  onChange={(e) =>
                    setAddOwnerDetails({
                      ...addOwnerDetails,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  type="password"
                  className="form-control mt-3"
                  name=""
                  id=""
                  placeholder="Enter the PASSWORD for OWNER"
                  value={addOwnerDetails.password}
                  onChange={(e) =>
                    setAddOwnerDetails({
                      ...addOwnerDetails,
                      password: e.target.value,
                    })
                  }
                />
               

                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button className="btn btn-primary" onClick={handleAddOwner}>
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAddcenterOwner;
