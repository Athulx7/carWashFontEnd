import React, { useEffect } from "react";
import OwnerHeader from "./OwnerHeader";
import OwnerSIde from "./OwnerSIde";
import OwnerTopHead from "./OwnerTopHead";
import "./css/ownerdashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { addOwnerComplaint, getBookingForCenter, getReviewForcenter } from "../Services/allAPI";

function OwnerDashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const owenerData = JSON.parse(sessionStorage.getItem("logged owner"));
  const token = sessionStorage.getItem("token");

  const [complaintdata, setComplaintdata] = useState({
    ownername: owenerData.username,
    centername: owenerData.washcentername,
    complaint: "",
  });

  const handleAddComplaint = async (e) => {
    e.preventDefault();
    const { ownername, centername, complaint } = complaintdata;
    if (!complaint) {
      toast.error("please enter the complaint");
    } else {
      const reqBody = new FormData();
      reqBody.append("ownername", ownername);
      reqBody.append("centername", centername);
      reqBody.append("complaint", complaint);

      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const result = await addOwnerComplaint(reqBody, reqHeader);
      if (result.status === 200) {
        toast.success("complaint is added succesfully");
        handleClose();
      } else {
        toast.error("something went wrong");
      }
    }
  };




  //gettting center review for dashboard 

  const [reviewDetails,setReviewDEtails] = useState([])

  const getReview = async () => {
    try {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await getReviewForcenter(reqHeader);
      if (result && result.data) {
        setReviewDEtails(result.data);
      } else {
        console.log("errorrr");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  useEffect(() => {
    // console.log(reviewDetails); 
  }, [reviewDetails]);



  //getting booking details for dashboard

  const [booking,setBooking]=useState([])

  const getbooking = async ()=>{
    try {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await getBookingForCenter(reqHeader);
      if (result && result.data) {
        setBooking(result.data);
      } else {
        console.log("errorrr");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    getbooking()
  },[])
  useEffect(()=>{
    // console.log(booking)
  },[booking])




  



  return (
    <>
      <div className="d-flex dash1">
        <div style={{ width: "20%" }}>
          <OwnerHeader />
        </div>
        <div className="" style={{ width: "80%" }}>
          <OwnerTopHead />
          <OwnerSIde />

          <div className="">
            <h4 className="text-center fw-bold text-primary mt-4">
              OWNER DASHBOARD
            </h4>
            <hr className="" />
          </div>

          <div className="contanier d-flex justify-content-ceter align-items-center mt-5">
            <div className="firstbox ms-auto me-auto ">
              <Link to={"/owneruser"} className="dashlinks">
                <h6 className="fw-bolder p-2 text-center mt-2">
                  <FontAwesomeIcon icon={faUser} /> USERS{" "}
                </h6>
                <h4 className="text-center text-primary fw-bold">{booking?.length}</h4>
              </Link>
            </div>

            <div className="firstbox ms-auto me-auto ">
              <Link to={"/ownerreview"} className="dashlinks">
                <h6 className="fw-bolder p-2 text-center mt-2">
                  <FontAwesomeIcon icon={faBook} /> REVIEWS{" "}
                </h6>
                <h4 className="text-center text-primary fw-bold">{reviewDetails?.length}</h4>
              </Link>
            </div>

            <div className="firstbox ms-auto me-auto ">
              <Link to={"/ownerbooking"} className="dashlinks">
                <h6 className="fw-bolder p-2 text-center mt-2">
                  <FontAwesomeIcon icon={faBell} /> BOOKINGS{" "}
                </h6>
                <h4 className="text-center text-primary fw-bold">{booking?.length}</h4>
              </Link>
            </div>
          </div>

          <div className="container d-flex justify-content-center align-items-center mt-5">
            <Link className="mt-5">
              <button className="btn btn-primary mt-5" onClick={handleShow}>
                ADD COMPLAINT TO ADMIN
              </button>
            </Link>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="fw-bold">
                  ADD COMPLAINT TO ADMIN
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form action="">
                  {/* <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control mt-4"
                    value={owenerData.username}
                    // onChange={(e)=>setComplaintdata({...complaintdata,ownername:e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Enter center name"
                    className="form-control mt-4"
                    value={owenerData.washcentername}
                  /> */}
                  <textarea
                    name=""
                    placeholder="Enter your complaint"
                    className="form-control mt-4 "
                    style={{ height: "200px" }}
                    id=""
                    value={complaintdata.complaint}
                    onChange={(e) =>
                      setComplaintdata({
                        ...complaintdata,
                        complaint: e.target.value,
                      })
                    }
                  ></textarea>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleAddComplaint}>
                  ADD
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerDashboard;
