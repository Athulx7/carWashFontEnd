import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminTopHead from "./AdminTopHead";
import { Link } from "react-router-dom";
import { faBook, faCar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllusers, getWebsiteReviewAdmin } from "../Services/allAPI";

function AdminDash() {
  const [userData, setUserdata] = useState([]);

  const getuserdataforadmin = async () => {
    const result = await getAllusers();
    setUserdata(result.data)
    
  };

  const fillterUser = userData?.filter(user => user.role === 'user')
  const filterOwner = userData?.filter(owner => owner.role === 'owner')
  
  
  const [webreview,setwebreview] = useState([])
 const getWebsitereviewa = async ()=>{
  const result = await getWebsiteReviewAdmin()
  setwebreview(result.data)
 }

//  console.log(webreview)

  

  useEffect(() => {
    getuserdataforadmin();
    getWebsitereviewa()
    
  }, []);

  return (
    <>
      <div className="d-flex">
        <div className="" style={{ width: "20%" }}>
          <AdminHeader />
        </div>

        <div className="" style={{ width: "80%" }}>
          <AdminTopHead />

          <div className="text-center mt-5">
            <h4 className="fw-bold fs-3 text-primary">ADMIN DASHBOARD</h4>
            <hr />
          </div>

          <div className="container d-flex align-items-center justify-content-center mt-5">
            <div className="firstbox ms-auto me-auto ">
              <Link className="dashlinks" to={"/adminuser"}>
                <h6 className="fw-bolder p-2 text-center mt-2">
                  <FontAwesomeIcon icon={faUser} /> USERS{" "}
                </h6>
                <h4 className="text-center text-primary fw-bold">{fillterUser.length}</h4>
              </Link>
            </div>

            <div className="firstbox ms-auto me-auto ">
              <Link to={"/admincenter"} className="dashlinks">
                <h6 className="fw-bolder p-2 text-center mt-2">
                  <FontAwesomeIcon icon={faCar} /> CENTERS{" "}
                </h6>
                <h4 className="text-center text-primary fw-bold">{filterOwner.length}</h4>
              </Link>
            </div>

            <div className="firstbox ms-auto me-auto ">
              <Link className="dashlinks" to={"/adminreview"}>
                <h6 className="fw-bolder p-2 text-center mt-2">
                  <FontAwesomeIcon icon={faBook} /> REVIEWS{" "}
                </h6>
                <h4 className="text-center text-primary fw-bold">{webreview?.length}</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDash;
