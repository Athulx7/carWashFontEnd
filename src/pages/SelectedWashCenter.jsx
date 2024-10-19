import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import washingimage1 from "../assets/washing1.jpg";
import washingimage2 from "../assets/wasing2.jpg";
import washingimage3 from "../assets/washing3.jpg";
import "./CSS/selectedcenter.css";

import CenterBookin from "./CenterBookin";
import { Link } from "react-router-dom";

function SelectedWashCenter() {
  return (
    <>
      <Header />

      <div className="container  ">
        <div>
          <Row>
            <Col>
              <div className="images ">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={washingimage1}
                      width={"100%"}
                      height={"300rem"}
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={washingimage2} width={"100%"} height={"300rem"} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={washingimage3}
                      alt=""
                      width={"100%"}
                      height={"300rem"}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="heading mt-5">
                <h3 className="text-primary fw-bold">CAR WASH CENTER NAME</h3>
                <div className="d-flex ">
                  <p>
                    <FontAwesomeIcon icon={faStar} className="text-warning " />{" "}
                    <span className="fw-bold ">5</span>
                  </p>

                  <p className="ms-2">||</p>
                  <p className="ms-2">loaction</p>
                </div>

                <hr />
              </div>

              <h3 className="fw-bold mt-4">About This Car Wash Center</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis hic ut, laudantium facere, expedita excepturi Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                veniam officiis accusamus sed voluptatum incidunt unde atque
                dolor iusto illum mollitia repellendus, magnam amet voluptas
                pariatur natus earum ea nostrum? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Ea quaerat dolores voluptates
                quibusdam dicta at temporibus odit veniam nam delectus tenetur
                blanditiis, fugit sequi officia sint. Suscipit quo perspiciatis
                maxime. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Laborum unde repudiandae pariatur natus ipsa. Aut illum
                est recusandae distinctio, odit veritatis doloribus velit
                assumenda laboriosam suscipit accusamus similique et quidem.
                libero eum, repellendus corrupti ducimus soluta alias itaque
                nesciunt assumenda? Incidunt quisquam expedita minus illo?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis doloremque vero odio dolorem, qui voluptas ratione
                iure accusamus omnis ad rerum aspernatur labore, quis autem
                officiis! Esse maiores dolores ipsam. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Laborum cupiditate illo
                voluptate sint officia nobis magni sapiente aliquid architecto
                hic, voluptatum fugiat repudiandae ratione est tempore quibusdam
                r Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veniam nostrum ullam quod natus quasi assumenda laborum
                cupiditate excepturi quidem magni facilis ab officiis pariatur,
                rem perferendis vitae illo magnam obcaecati. ecusandae fugit
                culpa.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia
                accusamus saepe sit aliquid minus sapiente ducimus, distinctio
                ab aperiam tempore sint praesentium! Inventore fuga Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quae in error
                suscipit! Nesciunt rem nulla qui exercitationem ipsam! Impedit
                iste quasi ut, necessitatibus hic repellat deleniti sapiente
                dolore sit dolor. sequi odio, adipisci suscipit recusandae!
              </p>

              <div className="addreview mt-5">
                <h3 className="mb-4 fw-bold">
                  Add a Review and rating about center name
                </h3>
                
                <textarea name="" className="form-control" placeholder="Enter your valubale review" style={{height:'150px'}} id=""></textarea>
                 <p className="fw-bold mt-3 text-center ">click your rating</p>
                <div className="d-flex  mt-3 align-items-center justify-content-center text-center">
                 
                  <button
                    className=" ms-2"
                    style={{ backgroundColor: "white", border: "white" }}
                  >
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </button>

                  <button
                    className=" ms-2"
                    style={{ backgroundColor: "white", border: "white" }}
                  >
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </button>

                  <button
                    className=" ms-2"
                    style={{ backgroundColor: "white", border: "white" }}
                  >
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </button>

                  <button
                    className=" ms-2"
                    style={{ backgroundColor: "white", border: "white" }}
                  >
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </button>

                  <button
                    className=" ms-2"
                    style={{ backgroundColor: "white", border: "white" }}
                  >
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                  </button>
                </div>
                <Link>
                  <button className="btn btn-primary w-100 mt-3">SUBMIT</button>
                </Link>
              </div>
            </Col>

            <Col style={{}}>
              <CenterBookin />
            </Col>
          </Row>
        </div>

        <div className="container"></div>
      </div>

      <Footer />
    </>
  );
}

export default SelectedWashCenter;
