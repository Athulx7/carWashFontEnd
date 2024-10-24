import React, { createContext, useState } from "react";

export const editCenterDetailsResponceContext = createContext();
export const reviewResponceContext = createContext()

function ContextShare({ children }) {
  const [editCenterDetailsResponce, seteditCenterDetailResponce] = useState({});
  const [reviewResponce,setReviewResponce] = useState({})
  return (
    <>
      <editCenterDetailsResponceContext.Provider
        value={{ editCenterDetailsResponce,seteditCenterDetailResponce }}
      >
        <reviewResponceContext.Provider value={{reviewResponce,setReviewResponce}}>
        {children}
        </reviewResponceContext.Provider>
        
      </editCenterDetailsResponceContext.Provider>
    </>
  );
}

export default ContextShare;
