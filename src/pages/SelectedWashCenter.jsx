import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import "./CSS/selectedcenter.css";

import CenterBookin from "./CenterBookin";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  addReviewForSpecificCenter,
  getSelectedCenterAPI,
} from "../Services/allAPI";
import { BASE_URL } from "../Services/baseURL";
import { toast } from "react-toastify";
import { reviewResponceContext } from "../Context/ContextShare";

function SelectedWashCenter() {
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(id)

  const [centerData, setCenterData] = useState([]);

  const getSelecetdCEnterDetails = async () => {
    const result = await getSelectedCenterAPI(id);
    setCenterData(result.data);
    // console.log(result);
  };

  // console.log(centerData);

  useEffect(() => {
    getSelecetdCEnterDetails();
  }, [id]);

  //adding review
  const [selectedStar, setSelectedstar] = useState(0);
  const handleSelectStar = (index) => {
    setSelectedstar(index + 1);
  };

  const [reviewDEtails, setReviewDEtails] = useState("");
  // const [submitReviewData,setSubmitReviewData] = useState(null)
  const loggedUser = JSON.parse(sessionStorage.getItem("leggeduser"));
  const token = sessionStorage.getItem("token");

  const { reviewResponce, setReviewResponce } = useContext(
    reviewResponceContext
  );

  const hanldeAddReview = async (e) => {
    e.preventDefault();
    if (loggedUser) {
      if (reviewDEtails === "") {
        toast.error("please add your valuable review");
      } else {
        const username = loggedUser.username;
        const useremail = loggedUser.email;
        const washcentername = centerData.washcentername;
        const ownerID = centerData.ownerID;

        // console.log(username,useremail,washcentername)

        const reqBody = new FormData();
        reqBody.append("username", username);
        reqBody.append("useremail", useremail);
        reqBody.append("washcentername", washcentername);
        reqBody.append("rating", selectedStar);
        reqBody.append("review", reviewDEtails);
        reqBody.append("centerID", id);
        reqBody.append("ownerID", ownerID);
        // console.log(reqBody);

        const result = await addReviewForSpecificCenter(reqBody);
        setReviewResponce(result);
        // console.log(result);
        if (result.status === 200) {
          toast.success("your valuable feed back is updated");
          setReviewDEtails("");
          setSelectedstar(0);
        } else {
          toast.error("something went wrong");
        }
      }
    } else {
      swal({
        title: "please Login",
        text: "please login and add valubale feedback about us",
        icon: "warning",
      });
      navigate("/login");
    }
  };

  return (
    <>
      


<Header />

<div className="container mt-5">
  <Row className="gy-4">
    
    <Col lg={8} xs={12} className="">
      
      <div className="images mb-4">
        <Carousel>
          {[centerData?.image1, centerData?.image2, centerData?.image3].map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={`${BASE_URL}/uploads/${image}`}
                alt={`Slide ${index + 1}`}
                className="d-block w-100"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      
      <div className="heading mt-4">
        <h3 className="text-primary fw-bold">{centerData?.washcentername?.toUpperCase()}</h3>
        <div className="d-flex align-items-center mt-2">
          <p className="mb-0">
            <FontAwesomeIcon icon={faStar} className="text-warning" /> <span className="fw-bold">5</span>
          </p>
          <p className="mx-2 mb-0">||</p>
          <p className="mb-0">{centerData?.location}</p>
        </div>
        <hr />
      </div>

      
      <h3 className="fw-bold mt-4">About This Car Wash Center</h3>
      <p>{centerData?.about?.substring(0, 1000)}</p>
      <p>{centerData?.about?.substring(1000, 1500)}</p>
      <p>{centerData?.about?.substring(1500)}</p>

      
      <div className="addreview mt-5">
        <h3 className="mb-4 fw-bold">Add a Review and Rating</h3>
        <textarea
          className="form-control mb-3"
          placeholder="Enter your valuable review"
          style={{ height: "150px" }}
          value={reviewDEtails}
          onChange={(e) => setReviewDEtails(e.target.value)}
        ></textarea>
        <p className="fw-bold mt-3 text-center">Click Your Rating</p>
        <div className="d-flex justify-content-center mt-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              
              onClick={() => handleSelectStar(index)}
              className="border-0 bg-transparent ms-2"
            >
              {index < selectedStar ? (
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              ) : (
                <FontAwesomeIcon icon={faStarRegular} className="text-warning" />
              )}
            </button>
          ))}
        </div>
        <div className="text-center mt-2">
          <p className="fw-bold">{selectedStar} / 5</p>
        </div>
        <button className="btn btn-primary w-100" onClick={hanldeAddReview}>
          SUBMIT
        </button>
      </div>
    </Col>

    
    <Col lg={4} xs={12} className="">
      <CenterBookin centerData={centerData} />
    </Col>
  </Row>
</div>

<Footer />

    </>
  );
}

export default SelectedWashCenter;
