import React, { useState, useEffect } from "react";
import Intro from "./subComponents/intro";
import MyNav from "./subComponents/myNav";
import "./css/main.css";
import Footer from "./subComponents/footer";

const Main = () => {
  return (
    <div className="main">
      <Intro></Intro>
      <Footer></Footer>
    </div>
  );
};

export default Main;
