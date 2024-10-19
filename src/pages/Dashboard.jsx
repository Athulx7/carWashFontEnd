import React from "react";
import "./CSS/dashboard.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import carwashlogo from "../assets/carwashlogo.jpg";
import dashboardImage from "../assets/dashImage.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import './dash.css'
function Dashboard() {
  return (
    <div className="w-100 dashborad-main">
      <div className="dash-nav-main">
        <Navbar className="">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={carwashlogo}
                width="100"
                height=""
                className="d-inline-block align-top "
              />{" "}
              <span className="carwashtitle text-primary ">CAR WASH</span>
            </Navbar.Brand>
            <div className="buttons">
              <Link to={"/login"}>
                <button className="btn btn-primary rounded">LOGIN</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-primary rounded ms-4">
                  REGISTER
                </button>
              </Link>
            </div>
          </Container>
        </Navbar>
      </div>

      <div className="dashContent container d-flex">
        <div className="first-content p-3">
          <div className="">
            <h1 className="fw-bold">
              You Can Find Your Perfect Car Wash Centers Here
            </h1>
            <p className="mt-3">
              Join Our Community Experience is more than just Joining
            </p>
            <Link to={"/login"}>
              <button className="btn btn-primary ms-5 mt-3">GET STARTED</button>
            </Link>
          </div>
        </div>

        <div className="second-content ms-5">
          <img
            src={dashboardImage}
            width={"70%"}
            alt=""
            className="ms-5 mb-5"
          />
        </div>
      </div>

      <div className="dashFooter   align-items-center justify-content-center text-center mt-5 d-flex flex-column">
        <h4 className="fw-bold mt-5">CAR WASH</h4>
        <div className="d-flex mt-4">
          <input
            type="text"
            name=""
            id=""
            className="form-control me-5 rounded "
            placeholder="Enter your email"
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control rounded"
            placeholder="Enter a message "
          />
        </div>

        <button className="btn btn-primary mt-4">SEND MESSAGE</button>

        <h6 className="mt-5">+9199999999</h6>
        <h6 className="">carwashcenters@gmail.com</h6>

        <div className="d-flex">
          <Link
            style={{ textDecoration: "none", color: "blue", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          <Link
            className="ms-3"
            style={{
              textDecoration: "none",
              color: "#fd02b3",
              fontSize: "35px",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link
            className="ms-3"
            style={{ textDecoration: "none", color: "black", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>

          <Link
            className="ms-3"
            style={{ textDecoration: "none", color: "black", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <Link
            className="ms-3"
            style={{ textDecoration: "none", color: "blue", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link
            className="ms-3"
            style={{ textDecoration: "none", color: "red", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
        <div className="">
          <p className="mt-2 ms-5">copyrightnsjdnuhuisa</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
