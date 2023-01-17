import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);
  return (
    <React.Fragment>
      {location.pathname !== "/" ? (
        <div className="relative">
          <Footer />
          <div className="max-w-md m-auto from-sky-100 via-sky-200 to-sky-300 bg-gradient-to-br h-screen">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <main>{children}</main>
        </div>
      )}
    </React.Fragment>
  );
};

export default Layout;
