import React from "react";
import OwnerHeader from "./OwnerHeader";
import OwnerTopHead from "./OwnerTopHead";

function OwnerReview() {
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
        </div>
      </div>
    </>
  );
}

export default OwnerReview;
