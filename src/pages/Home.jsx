import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./CSS/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import HomeWashCenter from "./HomeWashCenter";
import AboutUs from "./AboutUs";
import AboutHome from "./AboutHome";
import { Link } from "react-router-dom";

function Home() {
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
            />
          </div>
          <div className="date w-100 ">
            <input
              type="date"
              name=""
              id=""
              placeholder="SELECT DATE"
              className="form-control text-center fs-5"
            />
          </div>
          <div className="time w-100">
            <input
              type="time"
              name=""
              id=""
              className="form-control text-center fs-5"
            />
          </div>
          <div className="searchButton w-50">
            <Link to={'/showmorewash'}>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> SEARCH
            </button>
            </Link>

          </div>
        </div>
      </div>

      <HomeWashCenter />


      <AboutHome />





      

      <Footer />
    </>
  );
}

export default Home;
