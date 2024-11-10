import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CSS/homewashcenter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoap, faStar } from "@fortawesome/free-solid-svg-icons";
import { getSixCenterForHome } from "../Services/allAPI";
import { BASE_URL } from "../Services/baseURL";

function HomeWashCenter() {
  const [HomeCenters, setHomeCenters] = useState([]);
  const getHomeCenters = async () => {
    const result = await getSixCenterForHome();
    // console.log(result)
    setHomeCenters(result.data);
  };
  // console.log(HomeCenters)

  useEffect(() => {
    getHomeCenters();
  }, []);

  
  return (
    <>
      <div style={{ backgroundColor: "aliceblue" }} className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">Choose Your Wash Centers</h3>
            <Link to="/showmorewash">
              <Button
                variant="primary"
                className="fw-bold"
                style={{ width: "150px", height: "50px" }}
              >
                SHOW MORE
              </Button>
            </Link>
          </div>

          <Row className="g-4">
            {HomeCenters?.length > 0 ? (
              HomeCenters.map((item, index) => (
                <Col key={index} md={6} lg={4} xl={3}>
                  <Card className="h-100 shadow-sm">
                    <Link to={`/selectedwash/${item._id}`}>
                      <Card.Img
                        variant="top"
                        src={`${BASE_URL}/uploads/${item.image2}`}
                        style={{
                          width: "100%",
                          height: "280px",
                          objectFit: "cover",
                        }}
                        className="p-3"
                      />
                    </Link>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="rating   text-dark rounded px-2 py-1">
                          4.1{" "}
                          <FontAwesomeIcon
                            icon={faStar}
                            className="text-warning "
                          />
                        </div>

                        <Link
                          className="text-decoration-none ms-auto me-auto"
                          to={`/selectedwash/${item._id}`}
                        >
                          <Card.Title className="text-center text-dark mb-1">
                            {item.washcentername}
                          </Card.Title>
                          <h6 className="text-center text-muted">
                            {item.location}
                          </h6>
                        </Link>
                      </div>

                      <Card.Text className="text-center mt-3">
                        <span className="fw-bold text-dark">
                          ₹ {item.price}
                        </span>
                      </Card.Text>

                      <Link to={`/selectedwash/${item._id}`}>
                        <Button variant="primary" className="w-100 fw-bold">
                          BOOK YOUR SLOT
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="container d-flex align-items-center justify-content-center flex-column text-center">
                <img
                  src="https://charatoon.com/photo/thum/5214.png"
                  alt="No centers available"
                  className="img-fluid mb-3"
                />
                <h5 className="fw-bold">There are no centers available</h5>
              </div>
            )}
          </Row>
        </div>
      </div>
    </>
  );
}

export default HomeWashCenter;
