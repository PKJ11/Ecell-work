import React from "react";
import Sidebar from "../../components/Sidebar";
import MainDash from "../../components/MainDash/MainDash";
import RightSide from "../../components/RigtSide/RightSide";
import { useState } from "react";
import "./Home.css";
import Calender from "../../components/Calender";

const Home = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <MainDash heading="Home"/>
       <Calender/>
    </div>
  );
};

export default Home;
