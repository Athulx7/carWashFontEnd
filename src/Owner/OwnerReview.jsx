import React, { useEffect, useState } from "react";
import OwnerHeader from "./OwnerHeader";
import OwnerTopHead from "./OwnerTopHead";
import { Table } from "react-bootstrap";
import { getReviewForcenter } from "../Services/allAPI";

function OwnerReview() {
  const owenerData = JSON.parse(sessionStorage.getItem("logged owner"));
  const token = sessionStorage.getItem("token");

  const [reviewDetails, setReviewDEtails] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div className="d-flex">
        <div className="" style={{ width: "20%" }}>
          <OwnerHeader />
        </div>

        <div className="" style={{ width: "80%" }}>
          <OwnerTopHead />

          <div className="">
            <h4 className="text-center fw-bold text-primary mt-3">
              REVIEW DETAILS
            </h4>
            <hr />
          </div>

          <div className="pe-4 ps-4">
            {reviewDetails?.length > 0 ? (
              <Table
                striped
                bordered
                hover
                className="striped bordered hover  mt-5"
              >
                <thead>
                  <tr className="text-center">
                    <th>ID</th>
                    <th>USER NAME</th>
                    <th>USER EMAIL</th>
                    <th>REVIEW</th>
                    <th>RATING</th>
                  </tr>
                </thead>

                {reviewDetails?.map((item, index) => (
                  <tbody>
                    <tr className="text-center">
                      <td className="pt-3">{index + 1}</td>
                      <td className="pt-3">{item?.username.toUpperCase()} </td>
                      <td className="pt-3">{item?.useremail}</td>
                      <td style={{ width: "40rem" }}>{item?.review}</td>
                      <td className="pt-3">{item?.rating}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            ) : (
              <div className="d-flex align-items-center justify-content-center flex-column">
                <img
                  width={500}
                  src="https://phoenixrogue.com/cdn/shop/files/process-images-01_798195b3-ab81-4b36-819f-fe88c7b2b9de.png?v=1708905593&width=1200"
                  alt=""
                />
                <p className="fs-4 fw-bold ">There is no Revies</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerReview;
