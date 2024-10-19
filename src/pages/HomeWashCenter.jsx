import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './CSS/homewashcenter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoap, faStar } from "@fortawesome/free-solid-svg-icons";

function HomeWashCenter() {
  return (
    <>
      <div className="" style={{ backgroundColor: "aliceblue" }}>
        <div className="container d-flex flex-column mt-5 ">
            <div className="d-flex justify-content-between">
          <h3 className="mt-5 fw-bolder">Choose Your Wash Centers</h3>
          <Link to={'/showmorewash'}>
          <button className="btn btn-primary mt-4 " style={{width:'150px',height:'50px'}}>SHOW MORE</button>
          </Link>
          

            </div>
          <div className="homewashMain ">
            <Row>
              <Col className="p-4">
                <div className="">
                  <Card style={{ width: "23rem" }} >
                    <Link to={'/selectedwash'}>
                    <Card.Img variant="top" className="p-3" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmF79yWdrJ3tnGLFC4vzz0DAD40PxmdauvGSAKNBda7DlK5ARS" />
                    </Link>
                    <Card.Body>
                        <div className="d-flex justify-content-evenly ">
                            <div className="ratinng rounded ">
                                <p className="ms-2 mt-1 text-light">4.1 <FontAwesomeIcon icon={faStar} className="text-light"/></p>
                            </div>

                        <Link className="link1" to={'/selectedwash'}  >
                        <Card.Title className="text-center">car wash center name</Card.Title>
                        <h6 className="text-center"> location</h6>
                        </Link>
                        </div>
                        
                     
                      <Card.Text>
                       <p><FontAwesomeIcon icon={faSoap } className="me-2 mt-4"/> Inner vaccum cleaning</p>
                       <p><FontAwesomeIcon icon={faSoap } className="me-2 "/> car Foam wash</p>
                       <p><FontAwesomeIcon icon={faSoap } className="me-2 "/> Four wheeler cleaning service</p>
                       <p><FontAwesomeIcon icon={faSoap } className="me-2 "/> wax polishing</p>

                       <hr />
                       <p><span className="fw-bold">&#8377; 300</span></p>


                      </Card.Text>
                      <Link to={'/selectedwash'}>
                      <Button variant="primary" style={{width:'100%'}} className="">BOOK YOUR SLOT</Button>
                      </Link>
                      
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              
              
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeWashCenter;
