import React from "react";
import "./css/ownerhead.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
function OwnerHeader() {
  const [open, setOpen] = useState(false);

  const ownerData = JSON.parse(sessionStorage.getItem("logged owner"))
  
  return (
    <>
      <div className="ownerheader1 bg-primary ">
        <div className="heading1 d-flex text-center justify-content-center align-items-center">
          <div className="ownerdetail mt-2">
            <img
              width={"100px"}
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
              alt=""
            />

            <h5 className="text-light fw-bold mt-2">{ownerData.username.toUpperCase()}</h5>
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <FontAwesomeIcon icon={faAngleUp} className="text-light" />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} className="text-light" />
              )}
            </div>

            <Collapse in={open}>
              <div className="bg-light rounded p-2">
                <p>email : {ownerData.email} </p>
              </div>
            </Collapse>
          </div>
        </div>

        <div className="first container ">
          <div className="dash ms-5 text-center mt-5">
            <Link
              to={"/ownerdash"}
              className="text-center  links fw-bold fs-5 "
            >
              DASH BOARD
            </Link>
          </div>
          <div className="dash ms-5 text-center mt-3 ">
            <Link
              to={"/owneruser"}
              className="text-center  links fw-bold fs-5 "
            >
              USER DETAILS
            </Link>
          </div>

          <div className="dash ms-5 text-center mt-3 ">
            <Link
              to={"/ownercenter"}
              className="text-center  links fw-bold fs-5 "
            >
                CENTER DETAILS
            </Link>
          </div>
          <div className="dash ms-5 text-center mt-3 ">
            <Link
              to={"/ownerbooking"}
              className="text-center  links fw-bold fs-5 "
            >
              BOOKING DETAILS
            </Link>
          </div>

          <div className="dash ms-5 text-center mt-3 ">
            <Link
              to={"/ownerreview"}
              className="text-center  links fw-bold fs-5 "
            >
              REVIEW DETAILS
            </Link>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default OwnerHeader;
