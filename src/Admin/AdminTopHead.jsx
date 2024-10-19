import React from "react";
import "./css/admintophead.css";
import carwashlogo from "../assets/carwashlogo.jpg";
import { useNavigate } from "react-router-dom";
function AdminTopHead() {

  const navigate = useNavigate()

  const handleLogout = ()=>{
    if(sessionStorage.getItem("token")){
      sessionStorage.removeItem("logged admin")
      sessionStorage.removeItem("token")
      navigate('/login')
    }
  }
  return (
    <>
      <div className="d-flex">
        <div className="d-flex">
          <img src={carwashlogo} width={"100px"} alt="" />
          <h3 className="mt-4 fw-bold text-primary">CAR WASH</h3>
        </div>

        <div className=" mt-4  ms-auto me-5">
          <button className="btn btn-danger" onClick={handleLogout}>LOG OUT</button>
        </div>
      </div>
    </>
  );
}

export default AdminTopHead;
