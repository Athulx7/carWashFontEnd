import React, { useState } from "react";
import "./css/adminheader.css";
import { Link } from "react-router-dom";

function AdminHeader() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
     


<div className={`adminheader1 bg-primary ${isOpen ? "open" : ""}`}>
    
      <button
        className="btn btn-primary d-lg-none m-2"
        onClick={toggleSidebar}
      >
        ☰ Menu
      </button>

      <div className="d-flex text-center justify-content-center align-items-center">
        <div className="mt-3">
          <img
            width="80px"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            alt="Admin Icon"
            className="rounded-circle"
          />
          <h5 className="text-light fw-bold mt-2">ADMIN</h5>
        </div>
      </div>

      <div className={`menu-items ${isOpen ? "d-block" : "d-none d-lg-block"}`}>
        <div className="text-center mt-5">
          <Link to="/admindash" className="links fw-bold fs-5">
            DASHBOARD
          </Link>
        </div>

        <div className="text-center mt-5">
          <Link to="/adminuser" className="adminlinks fw-bold fs-5">
            USER DETAILS
          </Link>
        </div>

        <div className="text-center mt-5">
          <Link to="/admincenter" className="adminlinks fw-bold fs-5">
            CENTER DETAILS
          </Link>
        </div>

        <div className="text-center mt-5">
          <Link to="/adminreview" className="adminlinks fw-bold fs-5">
            REVIEW DETAILS
          </Link>
        </div>

        <div className="text-center mt-5">
          <Link to="/adminownercomplaint" className="adminlinks fw-bold fs-5">
            OWNER COMPLAINTS
          </Link>
        </div>

        
      </div>
    </div>


    </>
  );
}

export default AdminHeader;
