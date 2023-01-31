import React from "react";
import Cardgroup from "./components/Cardgroup";
import Rating from "./components/Rating";
import Sidemenu from "./components/Sidemenu";
import Stock from "./components/Stock";
import About from "./pages/About";
import Grid from "./pages/Grid";
import Home from "./pages/Home";
import Reduce from "./pages/Reduce";
import Theme from "./pages/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      {/* <Home />
      <About />
      <Reduce/>
      <Theme/>
      <Grid/> */}
      {/* <div className="main">
        <div className="app">
          <div className="header-container">
            <Sidemenu />
          </div>
          <div className="dashboard">
            <Cardgroup />
            <Rating />
            <Stock />
          </div>
        </div>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="*" element={<Homepage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
