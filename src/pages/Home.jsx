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
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState([]);
  const [searched, setSearched] = useState(false);

  const seaarchCenter = async () => {
    const searchResult = await searching(location, date, time);
    // console.log(searchResult)
    setResult(searchResult?.data);
    setSearched(true);
  };
  useEffect(() => {
    // console.log(result);
  }, [result]);

  return (
    <>
      <Header />

      <div
        className="main w-100  bg-primary text-center d-flex flex-column justify-content-center align-items-center"
        style={{ height: "700px" }}
      >
        <div className="w-100" style={{marginBottom:''}}>
        <h1 className="fw-bold text-white ">
          FIND THE BEST <span className="text-primary">CAR WASH</span> CENTER
          FOR YOU
        </h1>

        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
          <div className="w-100 mb-3 mb-md-0">
          <label htmlFor="time" className="fs-5 fw-bold text-light">enter place</label>

            <input
              type="text"
              placeholder="ENTER THE LOCATION"
              className="form-control text-center fs-5"
              value={location}
              onChange={(e) => setLocation(e.target.value.toLowerCase())}
            />
          </div>
          <div className="w-100 mb-3 mb-md-0 ms-md-3">
          <label htmlFor="time" className="fs-5 fw-bold text-light">select date</label>

            <input
              type="date"
              className="form-control text-center fs-5"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Select the Date"
              onFocus={(e)=>(e.target.type = 'date')}
              onBlur={(e)=>(e.target.placeholder = date?'':'select date')}
            />
          </div>
          <div className="w-100 mb-3 mb-md-0 ms-md-3">
            <label htmlFor="time" className="fs-5 fw-bold text-light">select time</label>
            <input
              type="time"
              className="form-control text-center fs-5"
              value={time}
              placeholder="Select the time"
              // step={'3600'}
              id="time"
              onChange={(e) => setTime(e.target.value)}
              // onFocus={(e)=>(e.target.type = 'time')}
              // onBlur={(e)=>(e.target.placeholder=time?'':'select time')}
            />
          </div>
          
        </div>
        <div className="w-25 mt-3  me-auto ms-auto text-center">
            <button
              className="btn btn-light text-primary fw-bold w-100"
              onClick={seaarchCenter}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} /> SEARCH
            </button>
          </div>
        </div>

        {searched && (
          <div className="d-flex mt-3 justify-content-center w-75">
            <div className="w-75 bg-light rounded border border-3 border-primary p-3">
              {result?.length > 0 ? (
                result.map((item, index) => (
                  <div key={index} className="p-3 searchHover">
                    <Link
                      className="text-decoration-none text-dark "
                      to={`/selectedwash/${item._id}`}
                    >
                      <div className="d-flex align-items-center searchHover">
                        <FontAwesomeIcon icon={faCar} className="me-2" />
                        <h5 className="fw-bold mb-0 ">
                          {item?.washcentername.toUpperCase()}
                        </h5>
                      </div>
                      <p className="text-muted text-start mt-3">
                        {item?.location}
                      </p>
                      <hr />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="container d-flex align-items-center justify-content-center flex-column text-center">
                <img src="https://charatoon.com/photo/thum/5214.png" alt="No centers available" className="img-fluid mb-3" />
                <h5 className="fw-bold">There are no centers available</h5>
              </div>
              )}
            </div>
          </div>
        )}
       
      </div>

      <HomeWashCenter />
      <AboutHome />
      <Footer />
    </>
  );
}

export default Home;
