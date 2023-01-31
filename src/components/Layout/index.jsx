import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Sidemenu from "../Sidemenu";

const Layout = () => {
  return (
      <div className="main">
        <div className="app">
          <div className="sideMenu-container">
            <Sidemenu />
          </div>
          <div className="dashboard">
            <Outlet />
          </div>
          {/* <Footer/> */}
        </div>
      </div>
  );
};

export default Layout;
