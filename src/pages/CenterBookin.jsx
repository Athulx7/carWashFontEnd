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
          // alert(`Your Booking @ ${centerName} is conformed 
          //      \n please add a valueable feedback about us`);

               swal({
                title: "Hurray !!!",
                text: `Your Booking @ ${centerName} is confirmed 
               \n we hope you can get a perfect center and please add valubale feed back about us`,
                icon: "success",
              });
          navigate("/");
          // toast.success(
          //   "we hope you can get a perfect center and please add valubale feed back about us"
          // );
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

      <div className="bookingDiv border rounded shadow-sm p-4 mb-5 w-75 ms-5" >
        <div className="p-3">
          <p>
            Price:{" "}
            <span className="fw-bold fs-4"> &#8377; {centerData?.price}</span>
          </p>
          <hr />
        </div>

        <div className="p-3">
          <h5>Location</h5>
          <input
            type="text"
            value={centerData?.location}
            className="form-control rounded"
            readOnly
          />
        </div>

        <div className="p-3">
          <h5>Date</h5>
          <input
            type="date"
            className="form-control"
            value={bookingDetails.date}
            onChange={(e) =>
              setBookingDetails({ ...bookingDetails, date: e.target.value })
            }
          />
        </div>

        <div className="p-3">
          <h5>Time</h5>
          <input
            type="time"
            className="form-control"
            value={bookingDetails.time}
            onChange={(e) =>
              setBookingDetails({ ...bookingDetails, time: e.target.value })
            }
          />
        </div>

        <div className="p-3">
          <button
            className="btn btn-primary w-100"
            onClick={handleBookingCenter}
          >
            BOOK YOUR SLOT NOW
          </button>
        </div>
      </div>

      <div className="contacts mb-5 ms-5 w-75">
        <div className="text-center">
          <div className="ownerimage d-flex align-items-center justify-content-center">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
              width="100px"
              alt="Owner"
            />
          </div>
          <div className="mt-3">
            <h5>
              OWNER NAME:{" "}
              <span className="fw-bold">
                {centerData?.ownerName?.toUpperCase()}
              </span>
            </h5>
            <p className="mt-3">+91 {centerData?.contactno}</p>
            <p>{centerData?.owneremail}</p>
          </div>
        </div>
      </div>

      
      <div className="locationcenter mb-5 ms-5 ">
        <iframe
          src={`${centerData?.map}`}
          width="100%"
          height="450"
          className="rounded"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>

     
      <div className="viewReviews w-75 ms-5">
        <Carousel interval={3000} className="rounded shadow-sm">
          {revies?.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="text-center p-4">
                <p className="mb-4">{item?.review}</p>
                <div className="d-flex justify-content-center mb-2">
                  {[...Array(5)].map((star, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={i < item?.rating ? faStar : faStarRegular}
                      className="text-warning mx-1"
                    />
                  ))}
                </div>
                <p className="fw-bold">{item?.rating} / 5</p>
                <h6 className="fw-bold">{item?.username?.toUpperCase()}</h6>
                <p>{item?.useremail}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CenterBookin;
