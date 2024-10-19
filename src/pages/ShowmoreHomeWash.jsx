import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoap, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function ShowmoreHomeWash() {
  return (
    <>
      <Header />
      <div className="searchbar  d-flex justify-content-center align-items-center text-center mt-5 ">
        <div className="loacation w-100 d-flex ">
          <input
            type="text"
            placeholder="ENTER THE LOCATION"
            className="form-control border-secondary text-center fs-5"
          />
        </div>
        <div className="date w-100 ms-2 ">
          <input
            type="date"
            name=""
            id=""
            placeholder="SELECT DATE"
            className="form-control border-secondary text-center fs-5"
          />
        </div>
        <div className="time w-100 ms-2">
          <input
            type="time"
            name=""
            id=""
            className="form-control text-center border-secondary fs-5"
          />
        </div>
        <div className="searchButton w-50">
          <button className="btn btn-primary w-100 ms-4"> SEARCH</button>
        </div>
      </div>

      <div className="main1 p-4">
        <h4 className="text-center fw-bolder text-primary mt-5 ">
          VARIOUS CAR WASH CENTERS{" "}
        </h4>
        <hr />
        <Row>
          <Col>
            <div className="p-5">
              <Card style={{ width: "23rem" }}>
                <Link to={"/selectedwash"}>
                  <Card.Img
                    variant="top"
                    className="p-3"
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmF79yWdrJ3tnGLFC4vzz0DAD40PxmdauvGSAKNBda7DlK5ARS"
                  />
                </Link>
                <Card.Body>
                  <div className="d-flex justify-content-evenly ">
                    <div className="ratinng rounded ">
                      <p className="ms-2 mt-1 text-light">
                        4.1{" "}
                        <FontAwesomeIcon icon={faStar} className="text-light" />
                      </p>
                    </div>

                    <Link to={"/selectedwash"} className="link1">
                      <Card.Title className="text-center">
                        car wash center name
                      </Card.Title>
                      <h6 className="text-center"> location</h6>
                    </Link>
                  </div>

                  <Card.Text>
                    <p>
                      <FontAwesomeIcon icon={faSoap} className="me-2 mt-4" />{" "}
                      Inner vaccum cleaning
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faSoap} className="me-2 " /> car
                      Foam wash
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faSoap} className="me-2 " /> Four
                      wheeler cleaning service
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faSoap} className="me-2 " /> wax
                      polishing
                    </p>

                    <hr />
                    <p>
                      <span className="fw-bold">&#8377; 300</span>
                    </p>
                  </Card.Text>
                  <Link to={"/selectedwash"}>
                    <Button
                      variant="primary"
                      style={{ width: "100%" }}
                      className=""
                    >
                      BOOK YOUR SLOT
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

export default ShowmoreHomeWash;
