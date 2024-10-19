import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter } from "react-router-dom";
import ContextShare from "./Context/ContextShare.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextShare>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextShare>
  </StrictMode>
);