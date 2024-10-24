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
      <Navbar expand="lg" className="">
        <Container className="me-5">
          <Navbar.Brand href="/home">
            {" "}
            <img src={carwashLogo} width={"100px"} alt="" />{" "}
            <span
              className="text-primary"
              style={{ fontWeight: "bold", marginTop: "10px" }}
            >
              CAR WASH
            </span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div
              className="text-center align-items-center justify-content-center-evenly d-flex  ms-5"
              style={{ marginLeft: "100px" }}
            >
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "black" }}
                className="ms-5"
              >
                <h6>HOME</h6>
              </Link>

              <Link
                to={"/aboutus"}
                style={{ textDecoration: "none", color: "black" }}
                className="ms-5"
              >
                <h6>ABOUT US</h6>
              </Link>

              <Link
                to={"/showmorewash"}
                style={{ textDecoration: "none", color: "black" }}
                className="ms-5"
              >
                <h6>WASH CENTERS</h6>
              </Link>

              <Link
                to={"/contactus"}
                style={{ textDecoration: "none", color: "black" }}
                className="ms-5"
              >
                <h6>CONTACT US</h6>
              </Link>
            </div>
          </Navbar.Collapse>

          <div className="d-flex">
            {
              loggedUser?
              <div>
              <Link>
                <img
                  className="userLogo"
                  onClick={handleShow}
                  width={"50px"}
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  alt=""
                />

                <button
                  className="btn btn-danger ms-3 fw-bold "
                  onClick={handleLogout}
                >
                  LOG OUT
                </button>

                <Modal show={show} onHide={handleClose} size="md">
                  <Modal.Header closeButton className="">
                    <Modal.Title className="text-center ">
                      USER NAME
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <div className="">
                        <img
                          width={"100px"}
                          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                          alt=""
                        />
                      </div>

                      <div className="text-center">
                        <h5>
                          user Name :{" "}
                          <span className="text-primary">
                            {loggedUser.username}
                          </span>
                        </h5>

                        <h5>
                          user email :{" "}
                          <span className="text-primary">
                            {loggedUser.email}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Link>
            </div>

            :

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


            }
            
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
