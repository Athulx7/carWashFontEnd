import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./CSS/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import HomeWashCenter from "./HomeWashCenter";
import AboutUs from "./AboutUs";
import AboutHome from "./AboutHome";
import { Link } from "react-router-dom";
import { getMoreCenterAPI, searching } from "../Services/allAPI";

function Home() {

  const [location,setLocation] = useState('')
  const [date,setDate]=useState('')
  const [time,setTime] = useState('')
  const [result,setResult] = useState([])
  const [searched,setSearched]=useState(false)

const seaarchCenter = async()=>{
 
    const searchResult = await searching(location,date,time)
    // console.log(searchResult)
    setResult(searchResult?.data)
    setSearched(true)
  
  }
  useEffect(()=>{
    console.log(result)
  },[result])
 


  return (
    <>
      <Header />

      <div className=" w-100 bg-primary main" style={{ height: "700px" }}>
        <div className="container  d-flex align-items-center justify-content-center text-center ">
          <div className="home-heading    ">
            <h1 className="fw-bold" style={{ color: "white" }}>
              FIND THE BEST <span className="text-primary">CAR WASH</span>{" "}
              CENTER FOR YOU
            </h1>
          </div>
        </div>

        <div className="searchbar d-flex justify-content-center align-items-center text-center mt-5 ">
          <div className="loacation w-100 d-flex ">
            <input
              type="text"
              placeholder="ENTER THE LOCATION"
              className="form-control text-center fs-5"
              value={location}
              onChange={(e)=>setLocation(e.target.value.toLowerCase())}
            />
          </div>
          <div className="date w-100 ">
            <input
              type="date"
              name=""
              id=""
              placeholder="SELECT DATE"
              className="form-control text-center fs-5"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
            />
          </div>
          <div className="time w-100">
            <input
              type="time"
              name=""
              id=""
              className="form-control text-center fs-5"
              value={time}
              onChange={(e)=>setTime(e.target.value)}
            />
          </div>
          <div className="searchButton w-50">
            <Link to={""}>
              <button className="btn btn-primary" onClick={seaarchCenter}>
                <FontAwesomeIcon icon={faMagnifyingGlass} /> SEARCH
              </button>
            </Link>
          </div>
        </div>

        {
          searched &&(
            <div className="d-flex mt-3 align-items-center justify-content-center">
          <div className="w-50 bg-light rounded border border-3 border-primary">
            {
              result?.length>0?
              result.map((item)=>(
                <div className="p-3">
              <Link className="linkHome" to={`/selectedwash/${item._id}`}>
                <div className="d-flex">
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={faCar} />
                  </span>{" "}
                  <h5 className="ms-3 fw-bold">{item?.washcentername.toUpperCase()}</h5>
                </div>
                <div>
                  <p className="">{item?.location}</p>
                </div>
                <hr />
              </Link>
            </div>

              )):
              <p>nothing</p>
              
            }
           
          </div>
        </div>
          )
          
        }

        
      </div>

      <HomeWashCenter />

      <AboutHome />

      <Footer />
    </>
  );
}

export default Home;
