import React from "react";
import "./css/adminheader.css";
import { Link } from "react-router-dom";
function AdminHeader() {
  return (
    <>
      <div className="adminheader1 bg-primary">
        <div className="d-flex text-center justify-content-center align-items-center">
          <div className="mt-3">
            <img
              width={"100px"}
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
              alt=""
            />
            <h5 className="text-light fw-bold mt-2">ADMIN</h5>
          </div>
        </div>

        <div className="contanier ">
          <div className="text-center  mt-5 ">
            <Link to={"/admindash"} className="text-center  links fw-bold fs-5 ">
              DASH BOARD
            </Link>
          </div>

          <div className="text-center mt-5">
            <Link to={'/adminuser'} className="text-center fw-bold fs-5 adminlinks">
              USER DETAILS
            </Link>
          </div>

          <div className="text-center mt-5">
            <Link  to={'/admincenter'} className="text-center fw-bold fs-5 adminlinks">
              CENTER DETAILS
            </Link>
          </div>

          <div className="text-center mt-5">
            <Link to={'/adminreview'} className="text-center fw-bold fs-5 adminlinks">
              REVIEW DETAILS
            </Link>
          </div>

          <div className="text-center mt-5">
            <Link  to={'/adminownercomplaint'} className="text-center fw-bold fs-5 adminlinks">
              OWNER COMPLAINTS
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default AdminHeader;
