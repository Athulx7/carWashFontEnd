import React, { useContext, useEffect, useState } from "react";
import "./CSS/selectedcenter.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import {
  addBookingDetails,
  getReviewDetailsUSerDash,
} from "../Services/allAPI";
import { reviewResponceContext } from "../Context/ContextShare";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

function CenterBookin({ centerData }) {
  const booknow = () => {
    alert("Your Booking @ washcenter name is conformed");
  };

  //getting revies by specific center
  const id = centerData?._id;

  const [revies, setRevies] = useState([]);

  const getReviewForSPecified = async () => {
    const result = await getReviewDetailsUSerDash(id);
    // console.log(result)
    setRevies(result.data);
  };

  // console.log(revies);

  const { reviewResponce, setReviewResponce } = useContext(
    reviewResponceContext
  );

  useEffect(() => {
    getReviewForSPecified();
  }, [id, reviewResponce]);

  //booking center
  const loggedUser = JSON.parse(sessionStorage.getItem("leggeduser"));

  const centerID = centerData?._id;
  const centerName = centerData?.washcentername;
  const location = centerData?.location;
  const ownerID = centerData?.ownerID;

  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    time: "",
  });

  const { date, time } = bookingDetails;
  const navigate = useNavigate();

  const handleBookingCenter = async () => {
    // console.log(bookingDetails)
    // console.log(username)
    // console.log(useremail)
    // console.log(centerID)
    // console.log(centerName)
    // console.log(ownerID)
    // console.log(location)
    if (loggedUser) {
      const username = loggedUser.username;
      const useremail = loggedUser.email;

      if (!date || !time) {
        toast.error("please add your date and time");
      } else {
        const reqBody = new FormData();
        reqBody.append("username", username);
        reqBody.append("useremail", useremail);
        reqBody.append("centername", centerName);
        reqBody.append("centerID", centerID);
        reqBody.append("ownerID", ownerID);
        reqBody.append("location", location);
        reqBody.append("date", date);
        reqBody.append("time", time);

        const result = await addBookingDetails(reqBody);
        if (result.status === 200) {
          alert(`Your Booking @ ${centerName} is conformed 
               \n please add a valueable feedback about us`);
          navigate("/");
          toast.success(
            "we hope you can get a perfect center and please add valubale feed back about us"
          );
        } else {
          toast.error("booking no confirmed something went wrong");
        }
      }
    } else {
      swal({
        title: "please Login",
        text: "please login and conform your booking",
        icon: "warning",
      });
      navigate("/login");
    }
  };

  return (
    <>
      <div className="  mt-5 ">
        <div className="bookingDiv">
          <div className="p-3">
            <p>
              Price :{" "}
              <span className="fw-bold fs-4"> &#8377; {centerData?.price}</span>{" "}
            </p>
            <hr />
          </div>

          <div className="p-3">
            <h5>Location</h5>
            <input
              type="text"
              value={centerData?.location}
              className="form-control rounded"
            />
          </div>

          <div className="p-3">
            <h5>Date</h5>
            <input
              type="date"
              name=""
              id=""
              className="form-control"
              value={bookingDetails.date}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, date: e.target.value })
              }
            />
          </div>

          <div className="p-3">
            <h5>time</h5>
            <input
              type="time"
              name=""
              id=""
              className="form-control"
              value={bookingDetails.time}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, time: e.target.value })
              }
            />
          </div>
          <div className="p-3">
            <Link>
              <button
                className="btn btn-primary w-100"
                onClick={handleBookingCenter}
              >
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="contacts mt-5">
          <div className="mt-3 mb-4">
            <div className="ownerimage p-3  d-flex align-items-center justify-content-center text-center">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                width={"100px"}
                alt=""
              />
            </div>
            <div className="text-center mt-2 ">
              <h5>
                OWNER NAME :{" "}
                <span className="fw-bold">
                  {centerData?.ownerName?.toUpperCase()}
                </span>
              </h5>
              <p className="mt-4">+91 {centerData?.contactno}</p>
              <p className="mb-5 pb-4">{centerData?.owneremail}</p>
            </div>
          </div>
        </div>

        <div className="locationcenter mt-5">
          <iframe
            src={`${centerData?.map}`}
            width="475"
            className="rounded"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="viewReviews mt-5">
          <Carousel className="">
            {revies?.map((item) => (
              <Carousel.Item interval={1000}>
                <div className="centercarousal  text-dark text-center d-flex align-items-center justify-content-center">
                  <div>
                    <p className="mb-5 p-5">{item?.review}</p>
                    <div className="mt-2 mb-2">
                      {[...Array(5)].map((star, i) =>
                        i < item?.rating ? (
                          <FontAwesomeIcon
                            icon={faStar}
                            className={`ms-2 text-warning`}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faStarRegular}
                            className="text-warning ms-2"
                          />
                        )
                      )}
                      <p className="fw-bold ">{item?.rating}/5</p>

                      {/* <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    /> */}
                    </div>
                    <h6 className="fw-bold">{item?.username.toUpperCase()}</h6>
                    <p>{item?.useremail}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* <Carousel.Item interval={500}>
              <div className="centercarousal  text-dark text-center d-flex align-items-center justify-content-center">
                <div>
                  <p className="mb-5 p-5">
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem tenetur possimus perferendis! Dolor eum vitae
                    reprehenderit eos possimus harum, delectus ratione, facilis
                    unde optio in at eaque beatae ipsum adipisci."
                  </p>
                  <div className="mt-2 mb-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                  </div>
                  <h6 className="mb-5 fw-bold">USER NAME</h6>
                  {/* <p>USERS LOCATION,PLACE</p> */}
          {/* </div>
              </div>
            </Carousel.Item> */}

          {/* <Carousel.Item>
              <div className=" centercarousal text-dark text-center d-flex align-items-center justify-content-center">
                <div>
                  <p className="mb-5 p-5">
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem tenetur possimus perferendis! Dolor eum vitae
                    reprehenderit eos possimus harum, delectus ratione, facilis
                    unde optio in at eaque beatae ipsum adipisci."
                  </p>
                  <div className="mt-2 mb-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning  ms-2"
                    />
                  </div>
                  <h6 className="mb-5 fw-bold">USER NAME</h6> */}
          {/* <p>USERS LOCATION,PLACE</p> */}
          {/* </div>
              </div>
            </Carousel.Item> */}
        </div>
      </div>
    </>
  );
}

export default CenterBookin;
