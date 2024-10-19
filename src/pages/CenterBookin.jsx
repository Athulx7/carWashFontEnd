import React from "react";
import "./CSS/selectedcenter.css";
import { Link } from "react-router-dom";

function CenterBookin() {
  const booknow = () => {
    alert("Your Booking @ washcenter name is conformed");
  };
  return (
    <>
      <div className="  mt-5 ">
        <div className="bookingDiv">
          <div className="p-3">
            <p>
              Price : <span className="fw-bold fs-4"> &#8377; 300</span>{" "}
            </p>
            <hr />
          </div>

          <div className="p-3">
            <h5>Location</h5>
            <input type="text" className="form-control rounded" />
          </div>

          <div className="p-3">
            <h5>Date</h5>
            <input type="date" name="" id="" className="form-control" />
          </div>

          <div className="p-3">
            <h5>time</h5>
            <input type="time" name="" id="" className="form-control" />
          </div>
          <div className="p-3">
            <Link>
              <button className="btn btn-primary w-100" onClick={booknow}>
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="contacts mt-5">
          <div className="mt-3 mb-4">
            <div className="ownerimage p-3  d-flex align-items-center justify-content-center text-center">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                width={"100px"}
                alt=""
              />
            </div>
            <div className="text-center mt-2 ">
              <h5>OWNER NAME</h5>
              <p className="mt-4">contact number of washing center</p>
              <p className="mb-5 pb-4">email of the washing center</p>
            </div>
          </div>
        </div>

        <div className="locationcenter mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62868.7637001723!2d76.22550014863278!3d9.992246799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d3c46cff973%3A0xa725ce5bbb49a6b9!2sAmbar%20Smart%20Wash!5e0!3m2!1sen!2sin!4v1726597160483!5m2!1sen!2sin" width="475" className="rounded" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
        </div>
      </div>
    </>
  );
}

export default CenterBookin;
