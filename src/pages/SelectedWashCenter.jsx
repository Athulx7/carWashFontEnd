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

      <div className="container  ">
        <div>
          <Row>
            <Col>
              <div className="images ">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={`${BASE_URL}/uploads/${centerData?.image1}`}
                      width={"100%"}
                      height={"300rem"}
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={`${BASE_URL}/uploads/${centerData?.image2}`}
                      width={"100%"}
                      height={"300rem"}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={`${BASE_URL}/uploads/${centerData?.image3}`}
                      alt=""
                      width={"100%"}
                      height={"300rem"}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="heading mt-5">
                <h3 className="text-primary fw-bold">
                  {centerData?.washcentername?.toUpperCase()}
                </h3>
                <div className="d-flex ">
                  <p>
                    <FontAwesomeIcon icon={faStar} className="text-warning " />{" "}
                    <span className="fw-bold ">5</span>
                  </p>

                  <p className="ms-2">||</p>
                  <p className="ms-2">{centerData?.location}</p>
                </div>

                <hr />
              </div>

              <h3 className="fw-bold mt-4">About This Car Wash Center</h3>
              <p>{centerData?.about?.substring(0, 1000)}</p>

              <p>{centerData?.about?.substring(1000, 1500)}</p>
              {centerData?.about?.substring(1500)}

              <p></p>

              <div className="addreview mt-5">
                <h3 className="mb-4 fw-bold">
                  Add a Review and rating about center name
                </h3>

                <div>
                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Enter your valubale review"
                    style={{ height: "150px" }}
                    id=""
                    value={reviewDEtails}
                    onChange={(e) => setReviewDEtails(e.target.value)}
                  ></textarea>
                  <p className="fw-bold mt-3 text-center ">click your rating</p>
                  <div className="d-flex  mt-3 align-items-center justify-content-center text-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <button
                        onClick={() => handleSelectStar(index)}
                        className=" ms-2"
                        style={{ backgroundColor: "white", border: "white" }}
                      >
                        {index < selectedStar ? (
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
                  </div>

                  <div className="text-center mt-2 ">
                    <p className="fw-bold">{selectedStar} /5</p>
                  </div>
                  <Link>
                    <button
                      className="btn btn-primary w-100 "
                      onClick={hanldeAddReview}
                    >
                      SUBMIT
                    </button>
                  </Link>
                </div>
              </div>
            </Col>

            <Col style={{}}>
              <CenterBookin centerData={centerData} />
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
