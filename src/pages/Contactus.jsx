import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import "./CSS/contactus.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendMessageAPI } from "../Services/allAPI";

function Contactus() {
  const navigate = useNavigate();

  const userdata = JSON.parse(sessionStorage.getItem("leggeduser"));
  // console.log(userdata)

  const token = sessionStorage.getItem("token");
  // console.log(token)

  const [message, setMessage] = useState({
    username: userdata.username,
    useremail: userdata.email,
    phone: "",
    messages: "",
  });

  const handleAddMesage = async () => {
    if (userdata || token) {
      // console.log(message);

      const { username, useremail, phone, messages } = message;
      if (!username || !useremail || !phone || !messages) {
        toast.warning("please fill the form comlpetely");
      } else {
        const reqBody = new FormData();
        reqBody.append("username", username);
        reqBody.append("useremail", useremail);
        reqBody.append("phone", phone);
        reqBody.append("messages", messages);

        const result = await sendMessageAPI(reqBody);
        // console.log(result)
        if (result.status === 201) {
          toast.success("your message is sended successfully");
          setMessage({
            username: userdata.username,
            useremail: userdata.email,
            phone: "",
            messages: "",
          });
        }
        else{
          toast.error("something went wrong")
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
        <Row className="align-items-center justify-content-center text-center text-md-start">
          <Col md={5} className="mb-5 mb-md-0">
            <h3 className="text-primary fw-bolder mb-5">
              CONTACT INFORMATION{" "}
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quidem, ad nam nesciunt ratione dignissim.
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-primary fs-4 me-2"
                />
                <h6>Location, Place, District, State, Country</h6>
              </div>
              <hr className="w-50" />
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="text-primary fs-4 me-2"
                />
                <h6>+91 9999999999</h6>
              </div>
              <hr className="w-50" />
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary fs-4 me-2"
                />
                <h6>carwashcenters@gmail.com</h6>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="bg-light p-4 rounded shadow">
              <h3 className="text-primary fw-bold">Send a Message</h3>
              <div className="mt-4">
                <Row className="mb-4">
                  <Col>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      value={userdata.username}
                      onChange={(e) =>
                        setMessage({ ...message, username: e.target.value })
                      }
                    />
                  </Col>
                  <Col>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                      value={message.phone}
                      onChange={(e) =>
                        setMessage({ ...message, phone: e.target.value })
                      }
                    />
                  </Col>
                </Row>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control mb-4"
                  value={userdata.email}
                  onChange={(e) =>
                    setMessage({ ...message, useremail: e.target.value })
                  }
                />
                <textarea
                  placeholder="Message"
                  className="form-control mb-4"
                  style={{ height: "150px" }}
                  value={message.messages}
                  onChange={(e) =>
                    setMessage({ ...message, messages: e.target.value })
                  }
                ></textarea>
                <button
                  className="btn btn-primary w-100"
                  onClick={handleAddMesage}
                >
                  Submit{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-5">
          <iframe
            className="w-100 border rounded shadow"
            style={{ height: "400px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720463!2d76.30948095113635!3d10.008813464705796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1726567127087!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contactus;
