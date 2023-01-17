import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import "./assets/custom.css";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AppWrapper } from "./context/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppWrapper>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AppWrapper>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
