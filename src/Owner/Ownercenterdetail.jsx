import React, { useContext, useEffect } from "react";
import OwnerHeader from "./OwnerHeader";
import "./css/ownercenterdetail.css";

import OwnerTopHead from "./OwnerTopHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { toast } from "react-toastify";
import { addCenterDetails, specifOwnerCenter } from "../Services/allAPI";
import { BASE_URL } from "../Services/baseURL";
import OwnerCenterEdit from "./OwnerCenterEdit";
import { editCenterDetailsResponceContext } from "../Context/ContextShare";

function Ownercenterdetail() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ownerData = JSON.parse(sessionStorage.getItem("logged owner"));
  const token = sessionStorage.getItem("token");

  const [addcenterdata, setaddcenterdata] = useState({
    washcentername: ownerData.washcentername,
    ownerName:ownerData.username,
    owneremail: ownerData.email,
    contactno: "",
    about: "",
    map: "",
    location: "",
    price: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const [preview1, setPreview1] = useState("");
  const [preview2, setPreview2] = useState("");
  const [preview3, setPreview3] = useState("");

  useEffect(() => {
    if (addcenterdata.image1) {
      setPreview1(URL.createObjectURL(addcenterdata.image1));
    }
    if (addcenterdata.image2) {
      setPreview2(URL.createObjectURL(addcenterdata.image2));
    }
    if (addcenterdata.image3) {
      setPreview3(URL.createObjectURL(addcenterdata.image3));
    }
  }, [addcenterdata.image1, addcenterdata.image2, addcenterdata.image3]);

  const handleAddCenteDetails = async (e) => {
    e.preventDefault();
    const {
      washcentername,
      ownerName,
      owneremail,
      contactno,
      about,
      map,
      location,
      price,
      image1,
      image2,
      image3,
    } = addcenterdata;

    if (
      !contactno ||
      !about ||
      !map ||
      !location ||
      !price ||
      !image1 ||
      !image2 ||
      !image3
    ) {
      toast.error("please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("washcentername", washcentername);
      reqBody.append("ownerName",ownerName)
      reqBody.append("owneremail", owneremail);
      reqBody.append("contactno", contactno);
      reqBody.append("about", about);
      reqBody.append("map", map);
      reqBody.append("location", location);
      reqBody.append("price", price);
      reqBody.append("image1", image1);
      reqBody.append("image2", image2);
      reqBody.append("image3", image3);

      

      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      const result = await addCenterDetails(reqBody, reqHeader);
      if (result.status === 200) {
        toast.success(`${washcentername} details are added successfully`);
        handleClose();
        getspeCenterdetails();
      }
    }
  };

  //get specific owner center details

  const [speCenterdetails, setSpecenterdetail] = useState([]);
  const getspeCenterdetails = async () => {
    // e.preventDefault();
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await specifOwnerCenter(reqHeader);
    setSpecenterdetail(result.data[0]);

  
  };

  
    const aboutTextsubstring = speCenterdetails?.about
    ? speCenterdetails.about.substring(0, 240)
    : "nodiscription";

  // console.log(aboutTextsubstring)
  const {editCenterDetailsResponce, seteditCenterDetailResponce} = useContext(editCenterDetailsResponceContext)


  useEffect(() => {
    getspeCenterdetails();
  }, [editCenterDetailsResponce]);


  return (
    <div className="d-flex">
      <div className="" style={{ width: "20%" }}>
        <OwnerHeader />
      </div>

      <div className="" style={{ width: "80%" }}>
        <OwnerTopHead />

        <div className="">
          <h4 className="text-center fw-bold text-primary mt-3">
            CAR WASH CENTER DETAILS
          </h4>
          <hr />
        </div>
        {speCenterdetails ? (
          <div>
            <div className="container d-flex justify-content-center align-items-center mt-5 p-4">
              <OwnerCenterEdit foreditpage={speCenterdetails} />

              <div className="button2 ms-auto">
                <Link to={"/ownerviewavailability"}>
                  <button className="btn btn-primary">
                    VIEW AVAILABILITY DETAILS{" "}
                    <FontAwesomeIcon icon={faPenToSquare} className="ms-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="images  ">
              <Carousel className="w-50 ms-auto me-auto mb-5 mt-5 border border-primary border-4 rounded-3">
                <Carousel.Item>
                  <img
                    src={`${BASE_URL}/uploads/${speCenterdetails.image1}`}
                    width={"100%"}
                    height={"300rem"}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={`${BASE_URL}/uploads/${speCenterdetails.image2}`}
                    width={"100%"}
                    height={"300rem"}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={`${BASE_URL}/uploads/${speCenterdetails.image3}`}
                    alt=""
                    width={"100%"}
                    height={"300rem"}
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            <div>
              <Table striped borderd hoverd>
                <thead>
                  <tr className="text-center">
                    <th>ID</th>
                    <th>CENTER NAME</th>
                    <th>EMAIL</th>
                    <th>CONTACT NO</th>
                    <th style={{ width: "350px" }}>ABOUT</th>
                    <th>LOCATION</th>
                    <th>PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>1</td>
                    <td>{speCenterdetails.washcentername}</td>
                    <td>{speCenterdetails.owneremail}</td>
                    <td>{speCenterdetails.contactno}</td>
                    <td>{aboutTextsubstring}.........</td>
                    <td>{speCenterdetails.location}</td>
                    <td>{speCenterdetails.price}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        ) : (
          //addd page

          <div>
            <div className="d-flex align-items-center justify-content-center flex-column mt-5">
              <h4 className="fw-medium">
                There is no center details available for You
              </h4>
              <h5 className="fw-bold">Please Add center details Here</h5>
              <button
                className="btn btn-primary mt-3 fw-bold fs-5"
                onClick={handleShow}
              >
                ADD CENTER DETAILS{" "}
                <FontAwesomeIcon icon={faCar} className="ms-2 " />
              </button>

              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>ADD CENTER DETAILS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <form action="" className="text-center">
                      <input
                        type="text"
                        className="form-control"
                        value={ownerData.washcentername}
                        onChange={(e) =>
                          setaddcenterdata({
                            ...addcenterdata,
                            washcentername: e.target.value,
                          })
                        }
                        placeholder="Enter Name retriew from sessin"
                      />
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter email retrieve from session storage"
                        value={ownerData.email}
                      />
                      <input
                        type="text"
                        className="form-control mt-2"
                        value={addcenterdata.contactno}
                        onChange={(e) =>
                          setaddcenterdata({
                            ...addcenterdata,
                            contactno: e.target.value,
                          })
                        }
                        placeholder="Enter  contact no"
                      />

                      <textarea
                        name=""
                        style={{ height: "300px" }}
                        className="form-control mt-2"
                        placeholder="Enter about centere"
                        value={addcenterdata.about}
                        onChange={(e) =>
                          setaddcenterdata({
                            ...addcenterdata,
                            about: e.target.value,
                          })
                        }
                        id=""
                      ></textarea>

                      <input
                        type="text"
                        className="form-control mt-2"
                        value={addcenterdata.location}
                        onChange={(e) =>
                          setaddcenterdata({
                            ...addcenterdata,
                            location: e.target.value,
                          })
                        }
                        placeholder="Enter  location"
                      />
                      <input
                        type="text"
                        className="form-control mt-2"
                        value={addcenterdata.map}
                        onChange={(e) =>
                          setaddcenterdata({
                            ...addcenterdata,
                            map: e.target.value,
                          })
                        }
                        placeholder="Enter  map"
                      />

                      <input
                        type="text"
                        className="form-control mt-2"
                        value={addcenterdata.price}
                        onChange={(e) =>
                          setaddcenterdata({
                            ...addcenterdata,
                            price: e.target.value,
                          })
                        }
                        placeholder="Enter  price"
                      />

                      <div className="">
                        <label htmlFor="image1" className="d-flex">
                          <img
                            width={150}
                            height={90}
                            className="mt-3 rounded border border-3 mb-3 border-primary "
                            src={
                              preview1
                                ? preview1
                                : "https://img.freepik.com/premium-vector/car-wash-featuring-car-being-washed-with-foam-set-against-solid-white-background-8_554682-9863.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=ais_hybrid"
                            }
                            alt=""
                          />

                          <input
                            type="file"
                            name="image1"
                            id="image1"
                            onChange={(e) =>
                              setaddcenterdata({
                                ...addcenterdata,
                                image1: e.target.files[0],
                              })
                            }
                            className="form-control mt-2 ms-4"
                          />
                        </label>
                      </div>

                      <div className="">
                        <label htmlFor="image2" className="d-flex">
                          <img
                            width={150}
                            height={90}
                            className="mt-3 rounded border mb-3 border-3 mb- border-primary "
                            src={
                              preview2
                                ? preview2
                                : "https://img.freepik.com/premium-vector/car-wash-featuring-car-being-washed-with-foam-set-against-solid-white-background-8_554682-9863.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=ais_hybrid"
                            }
                            alt=""
                          />

                          <input
                            type="file"
                            name="image2"
                            id="image2"
                            onChange={(e) =>
                              setaddcenterdata({
                                ...addcenterdata,
                                image2: e.target.files[0],
                              })
                            }
                            className="form-control mt-2 ms-4"
                          />
                        </label>
                      </div>

                      <div className="">
                        <label htmlFor="image3" className="d-flex">
                          <img
                            width={150}
                            height={90}
                            className="mt-3 rounded border border-3 mb-3 border-primary "
                            src={
                              preview3
                                ? preview3
                                : "https://img.freepik.com/premium-vector/car-wash-featuring-car-being-washed-with-foam-set-against-solid-white-background-8_554682-9863.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=ais_hybrid"
                            }
                            alt=""
                          />

                          <input
                            type="file"
                            name="image3"
                            id="image3"
                            onChange={(e) =>
                              setaddcenterdata({
                                ...addcenterdata,
                                image3: e.target.files[0],
                              })
                            }
                            className="form-control mt-2 ms-4"
                          />
                        </label>
                      </div>
                    </form>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleAddCenteDetails}>
                    ADD DATA
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ownercenterdetail;
