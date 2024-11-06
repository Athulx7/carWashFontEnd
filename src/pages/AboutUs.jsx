import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutimage from "../assets/aboutwash-Photoroom.png";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./CSS/aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { addWebReview, getWebReviewApi } from "../Services/allAPI";
import { toast } from "react-toastify";
import swal from "sweetalert";

function AboutUs() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //adding reviewfor website
  const loggedUser = JSON.parse(sessionStorage.getItem("leggeduser"));
 

  const [webreviewstar, setWebreviewstar] = useState(0);
  const handleSelectedstar = (index) => {
    setWebreviewstar(index + 1);
  };
  const [webreview, setWebreview] = useState("");

  const handleWebReviewSubmit = async (e) => {
    e.preventDefault();
  if(loggedUser){
    const token = sessionStorage.getItem("token");
    const username = loggedUser.username;
    const useremail = loggedUser.email;
    if (webreview === "") {
      toast.warning("please add your valuable feedback about us");
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("useremail", useremail);
      reqBody.append("webreview", webreview);
      reqBody.append("webreviewstar", webreviewstar);

      const result = await addWebReview(reqBody);
      // console.log(result);
      if (result.status === 200) {
        handleClose();
        setWebreview("");
        setWebreviewstar(0);
        toast.success("your valuable feedback is updated");
      }
      else{

      }
    }

  }
  else{
    swal({
        title:'please Login',
        text:'please login and add valubale feedback about us',
        icon:'warning',

      })
      navigate('/login')
  }
   
  };

  //get webfeedback details

  const [getingwebreview, setgettingwebreview] = useState([]);

  const getWebReview = async () => {
    const result = await getWebReviewApi();
    // console.log(result);
    setgettingwebreview(result.data);
  };
  // console.log(getingwebreview);

  useEffect(() => {
    getWebReview();
  }, []);

  return (
    <>
      <Header />

      <div className="container mt-5">
       
        <Row>
          <Col className="about-main me-5 w-50">
            <div>
              <h3 className="mb-5 fw-bold text-primary">ABOUT US</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                odio molestiae, hic illum totam quod eligendi quia. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Modi, quasi iusto
                iste doloremque reprehenderit doloribus blanditiis? Repellat,
                provident dolorum molestiae natus impedit iste non laudantium
                odit similique. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Non rem, inventore id unde ducimus vero rerum
                amet vitae sapiente praesentium exercitationem minima, quasi
                quis nisi minus ex. Placeat, ratione sed. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Vero, autem mollitia magni at
                non laboriosam? Aliquid cumque impedit iste odit harum facere,
                deleniti dolore. Ab ipsam numquam praesentium distinctio ex.
              </p>
            </div>
          </Col>
          <Col className="about-image  ms-5 w-50">
            <div>
              <img src={aboutimage} width="100%" alt="About us" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="container">
        <Row>
          <Col>
            <h5 className="fw-bold text-primary">
              <u>OUR MISSIONS</u>
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              sapiente mollitia voluptas! Doloribus quas, deseru nt temporibus
              delectus totam nihil facere necessitatibus at? Numquam illum
              laboriosam ab placeat voluptatum commodi\ Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            <p>
              {" "}
              Cumque suscipit harum quod quos possimus eius fugiat alias
              laudantium quaerat, officia, voluptates quisquam accusantium
              consectetur atque veritatis. Delectus temporibus pariatur nulla!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              doloribus temporibus veniam rem nesciunt voluptate eligendi
              exercitationem quos, adipisci illo cupiditate atque velit sint
              consequatur tempore culpa quod quisquam? Libero. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Harum in iste odit,
              tempora doloremque a laborum consequuntur ipsam voluptatum
              voluptates culpa corporis possimus. Ab, quasi. Minus pariatur
              porro recusandae repellendus? sapiente!
            </p>
          </Col>

          <Col>
            <h5 className="fw-bold text-primary">
              <u>OUR MISSIONS</u>
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              sapiente mollitia voluptas! Doloribus quas, deseru nt temporibus
              delectus totam nihil facere necessitatibus at? Numquam illum
              laboriosam ab placeat voluptatum commodi\ Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Cumque suscipit harum quod quos
              possimus eius fugiat alias laudantium quaerat, officia, voluptates
              quisquam accusantium consectetur atque veritatis. Delectus
              temporibus pariatur nulla! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Corporis doloribus temporibus veniam rem
              nesciunt voluptate eligendi exercitationem quos, adipisci illo
              cupiditate atque velit sint consequatur tempore culpa quod
              quisquam? Libero. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Harum in iste odit, tempora doloremque a laborum
              consequuntur ipsam voluptatum voluptates culpa corporis possimus.
              Ab, quasi. Minus pariatur porro recusandae repellendus? sapiente!
            </p>
          </Col>
        </Row>
      </div>

      <div className="feedback container mt-5">
          <div className="d-flex align-items-center mb-4">
            <h4 className="fw-bold text-primary">
              <u>WHAT OUR CLIENTS SAY</u>
            </h4>
            <Button className="ms-auto btn btn-primary" onClick={handleShow}>
              ADD YOUR REVIEW <FontAwesomeIcon icon={faAdd} className="ms-2" />
            </Button>
          
          

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold ">
                ADD REVIEW ABOUT US
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="">
                <textarea
                  onChange={(e) => setWebreview(e.target.value)}
                  value={webreview}
                  name=""
                  className="form-control"
                  placeholder="Enter your valuable review about us"
                  id=""
                ></textarea>

                <div className="mt-2 mb-2 text-center">
                  <p className="fw-bold mt-3">click Your rating</p>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button
                      onClick={() => handleSelectedstar(index)}
                      className=" ms-2"
                      style={{ backgroundColor: "white", border: "white" }}
                    >
                      {index < webreviewstar ? (
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-warning"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faStarRegular}
                          className="text-warning"
                        />
                      )}
                    </button>
                  ))}

                  <p className="fw-bold">{webreviewstar}/5</p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleWebReviewSubmit}>
                SUBMIT
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        

        <Carousel interval={3000} className="mt-4 rounded border border-3 shadow">
            {getingwebreview?.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="text-center py-4">
                  <p className="p-4">{item.webreview}</p>
                  <div className="d-flex justify-content-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={i < item.webreviewstar ? faStar : faStarRegular}
                        className="text-warning ms-1"
                      />
                    ))}
                  </div>
                  <p className="fw-bold mt-2">{item.webreviewstar}/5</p>
                  <h6 className="fw-bold">{item.username.toUpperCase()}</h6>
                  <p>{item.useremail}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      </div>
     

      <Footer />
    </>
  );
}

export default AboutUs;
