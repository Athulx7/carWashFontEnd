import React from 'react'
import carwashlogo from "../assets/carwashlogo.jpg";
import { useNavigate } from 'react-router-dom';
function OwnerTopHead() {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    if(sessionStorage.getItem("logged owner")){
      sessionStorage.removeItem("logged owner")
      sessionStorage.removeItem("token")
      navigate('/login')
    }
    
  }
  return (
    <div>
        <div className="d-flex ">
          <div className=" d-flex">
            <img src={carwashlogo} width={"100px"} alt="" />
            <h3 className="mt-4 fw-bold text-primary">CAR WASH</h3>
          </div>

          <div className="ms-auto me-5 mt-4" >
          <button className="btn btn-danger" onClick={handleLogout}>LOG OUT</button>
        </div>
        </div>
      
    </div>
  )
}

export default OwnerTopHead
