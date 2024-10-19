import React, { createContext, useState } from "react";

export const editCenterDetailsResponceContext = createContext();

function ContextShare({ children }) {
  const [editCenterDetailsResponce, seteditCenterDetailResponce] = useState({});
  return (
    <>
      <editCenterDetailsResponceContext.Provider
        value={{ editCenterDetailsResponce,seteditCenterDetailResponce }}
      >
        {children}
      </editCenterDetailsResponceContext.Provider>
    </>
  );
}

export default ContextShare;
