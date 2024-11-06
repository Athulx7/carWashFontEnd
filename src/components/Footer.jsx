import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import instaLogo from "../assets/instaLogo.png";

function Footer() {
  return (
    <>
      <div
        className="d-flex flex-column flex-md-row justify-content-center align-items-start p-5 mt-5"
        style={{ backgroundColor: "aliceblue" }}
      >
        <div className="mb-4 mb-md-0" style={{ maxWidth: "300px" }}>
          <Link to="/" className="text-dark" style={{ textDecoration: "none" }}>
            <h5>Car Wash</h5>
          </Link>
          <p className="mt-3 text-muted" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            praesentium sapiente nesciunt soluta adipisci, vel quas sint, esse
            ex suscipit cum assumenda dicta voluptatum provident placeat eum?
            Inventore, autem maxime.
          </p>
        </div>
        <div className="mb-4 mb-md-0 ms-md-5" style={{ maxWidth: "300px" }}>
          <h5>Links</h5>
          <div className="d-flex flex-column mt-3">
            <Link to="/home" className="text-decoration-none text-muted">
              Home
            </Link>
            <Link
              to="/aboutus"
              className="text-decoration-none text-muted mt-2"
            >
              About Us
            </Link>
            <Link
              to="/showmorewash"
              className="text-decoration-none text-muted mt-2"
            >
              Car Wash Centers
            </Link>
            <Link
              to="/contactus"
              className="text-decoration-none text-muted mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mb-4 mb-md-0 ms-md-4" style={{ maxWidth: "300px" }}>
          <h5>Send Message</h5>
          <div className="d-flex flex-column mt-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Text a message"
            />
            <button className="btn btn-primary fw-bold">SEND</button>
          </div>
        </div>

        <div className="ms-md-5" style={{ maxWidth: "300px" }}>
          <h5>Social</h5>
          <div className="d-flex mt-3">
            <Link to="/" className="text-decoration-none text-primary me-3">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
            <Link to="/" className="text-decoration-none text-info ">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
            <Link to="/" className="text-decoration-none text-dark ">
              <img src={instaLogo} width="60" alt="Instagram" />
            </Link>
            <Link to="/" className="text-decoration-none text-danger me-3">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </Link>
            <Link to="/" className="text-decoration-none text-dark">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
