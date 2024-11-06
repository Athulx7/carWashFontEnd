import React from "react";
import carwashLogo from "../assets/carwashlogo.jpg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = (e) => {
    e.preventDefault();
    if (sessionStorage.getItem("leggeduser")) {
      navigate("/");
      sessionStorage.removeItem("leggeduser");
      sessionStorage.removeItem("token");
    }
  };

  const loggedUser = JSON.parse(sessionStorage.getItem("leggeduser"));

  return (
    <>
     


<Navbar expand="lg" className="headerMain">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={carwashLogo} width="80" alt="Car Wash Logo" />
          <span className="text-primary fw-bold ms-2 fs-3">CAR WASH</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-column fs-5 flex-lg-row align-items-center justify-content-center ms-auto me-auto ">
            <Link to="/" className="nav-link text-dark ms-5 fw-bold">HOME</Link>
            <Link to="/aboutus" className="nav-link text-dark ms-4 fw-bold">ABOUT US</Link>
            <Link to="/showmorewash" className="nav-link text-dark ms-4 fw-bold">WASH CENTERS</Link>
            <Link to="/contactus" className="nav-link text-dark ms-4 fw-bold">CONTACT US</Link>
          </div>
          
          <div className="d-flex ms-auto">
            {loggedUser ? (
              <div className="d-flex align-items-center">
                <img
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  width="40"
                  className="rounded-circle userLogo me-3"
                  onClick={handleShow}
                  alt="User Profile"
                />
                <button className="btn btn-danger fw-bold" onClick={handleLogout}>
                  LOG OUT
                </button>

                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-center">USER NAME</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      width="100"
                      src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                      alt="User Icon"
                    />
                    <h5 className="mt-3">
                      Username: <span className="text-primary">{loggedUser.username}</span>
                    </h5>
                    <h5>
                      Email: <span className="text-primary">{loggedUser.email}</span>
                    </h5>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            ) : (
              <div className="d-flex">
                <Link to="/login" className="me-3">
                  <button className="btn btn-primary rounded">LOGIN</button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-primary rounded">REGISTER</button>
                </Link>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
