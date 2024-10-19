import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../Services/baseURL";
import { toast } from "react-toastify";
import { editCenterDetails } from "../Services/allAPI";
import { editCenterDetailsResponceContext } from "../Context/ContextShare";

function OwnerCenterEdit({ foreditpage }) {

  const {editCenterDetailsResponce, seteditCenterDetailResponce} = useContext(editCenterDetailsResponceContext);

  const [editCenter, setEditCenter] = useState({
    washcentername: "",
    owneremail: "",
    contactno: "",
    about: "",
    map: "",
    location: "",
    price: "",
    eimage1: null,
    eimage2: null,
    eimage3: null,
    centerID: "",
  });

  useEffect(() => {
    if (foreditpage) {
      setEditCenter({
        washcentername: foreditpage.washcentername,
        owneremail: foreditpage.owneremail,
        contactno: foreditpage.contactno,
        about: foreditpage.about,
        map: foreditpage.map,
        location: foreditpage.location,
        price: foreditpage.price,
        centerID: foreditpage._id,
      });
    }
  }, [foreditpage]);

  const [preview1, setPreview1] = useState("");
  const [preview2, setPreview2] = useState("");
  const [preview3, setPreview3] = useState("");

  useEffect(() => {
    if (editCenter.eimage1) {
      setPreview1(URL.createObjectURL(editCenter.eimage1))
    }
    if (editCenter.eimage2) {
      setPreview2(URL.createObjectURL(editCenter.eimage2));
    }
    if (editCenter.eimage3) {
      setPreview3(URL.createObjectURL(editCenter.eimage3));
    }
  }, [editCenter.eimage1, editCenter.eimage2, editCenter.eimage3]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const {
      washcentername,
      owneremail,
      contactno,
      about,
      location,
      map,
      price,
      eimage1,
      eimage2,
      eimage3,
    } = editCenter;

    if (
      !washcentername ||
      !owneremail ||
      !contactno ||
      !about ||
      !location ||
      !map ||
      !price
    ) {
      toast.error("please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("washcentername", washcentername);
      reqBody.append("owneremail", owneremail);
      reqBody.append("contactno", contactno);
      reqBody.append("about", about);
      reqBody.append("map", map);
      reqBody.append("location", location);
      reqBody.append("price", price);
      preview1
        ? reqBody.append("image1", eimage1)
        : reqBody.append("image1", foreditpage.image1);
      preview2
        ? reqBody.append("image2", eimage2)
        : reqBody.append("image2", foreditpage.image2);
      preview3
        ? reqBody.append("image3", eimage3)
        : reqBody.append("image3", foreditpage.image3);
      

      const token = sessionStorage.getItem("token");
      if (preview1 || preview2 || preview3) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        const result = await editCenterDetails(
          editCenter.centerID,
          reqBody,
          reqHeader
        );
        if(result.status === 200){
          toast.success(`${washcentername} details updated `)
          handleClose()
          // window.location.reload()
          seteditCenterDetailResponce(result)
        }
        else{
          toast.error("something went wrong")
        }
      } else {
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const result = await editCenterDetails(
          editCenter.centerID,
          reqBody,
          reqHeader
        );
        if(result.status ===200){
          toast.success(`${washcentername} details updated `)
          handleClose()
          // window.location.reload()
          seteditCenterDetailResponce(result)
        }
        else{
          toast.error('something went wrong')
        }
        
      }
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="button1">
        <button className="btn btn-primary" onClick={handleShow}>
          EDIT CENTER DETAILS{" "}
          <FontAwesomeIcon icon={faPenToSquare} className="ms-2" />
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>EDIT CENTER DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form action="" className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Enter New Name"
                value={editCenter.washcentername}
                onChange={(e) =>
                  setEditCenter({
                    ...editCenter,
                    washcentername: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter New Email"
                value={editCenter.owneremail}
                onChange={(e) =>
                  setEditCenter({ ...editCenter, owneremail: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter New contact no"
                value={editCenter.contactno}
                onChange={(e) =>
                  setEditCenter({ ...editCenter, contactno: e.target.value })
                }
              />
              <textarea
                name=""
                style={{ height: "300px" }}
                className="form-control mt-2"
                placeholder="Enter about centere"
                value={editCenter.about}
                onChange={(e) =>
                  setEditCenter({
                    ...editCenter,
                    about: e.target.value,
                  })
                }
                id=""
              ></textarea>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter New location"
                value={editCenter.location}
                onChange={(e) =>
                  setEditCenter({ ...editCenter, location: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter New map"
                value={editCenter.map}
                onChange={(e) =>
                  setEditCenter({ ...editCenter, map: e.target.value })
                }
              />

              <input
                type="text"
                className="form-control mt-2"
                placeholder="Enter New price"
                value={editCenter.price}
                onChange={(e) =>
                  setEditCenter({ ...editCenter, price: e.target.value })
                }
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
                        : `${BASE_URL}/uploads/${foreditpage.image1}`
                    }
                    alt=""
                  />

                  <input
                    type="file"
                    name=""
                    id="image1"
                    onChange={(e) =>
                      setEditCenter((prevState)=>({
                        ...prevState,
                        eimage1: e.target.files[0],
                      }))
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
                    alt=""
                    src={
                      preview2
                        ? preview2
                        : `${BASE_URL}/uploads/${foreditpage.image2}`
                    }
                  />

                  <input
                    onChange={(e) =>
                      setEditCenter((prevState)=>({
                        ...prevState,
                        eimage2: e.target.files[0],
                      }))
                    }
                    type="file"
                    name="image2"
                    id="image2"
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
                    alt=""
                    src={
                      preview3
                        ? preview3
                        : `${BASE_URL}/uploads/${foreditpage.image3}`
                    }
                  />

                  <input
                    onChange={(e) =>
                      setEditCenter((prevState)=>({
                        ...prevState,
                        eimage3: e.target.files[0],
                      }))
                    }
                    type="file"
                    name="image3"
                    id="image3"
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
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OwnerCenterEdit;
