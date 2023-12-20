import React from "react";
import Sidebar from "../../components/Sidebar";
import MainDash from "../../components/MainDash/MainDash";
import RightSide from "../../components/RigtSide/RightSide";
import { useState } from "react";
import "./Home.css";
import Calender from "../../components/Calender";
import img1 from "../../imgs/Sales Dashboard.png";

const Home = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="EnWrapper" style={{ backgroundColor: 'rgb(0,0,0,0.1)', overflowX: 'hidden' }}>
        <MainDash heading="Home" />

        {/* White div with Real-Time Statistical View */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', marginTop: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '0 20px', height: '70px' }}>
          <h2>Overall Statistical View</h2>
          {/* Add the img1 below the h2 */}
          <img src={img1} alt="Sales Dashboard" style={{ width: '100%', marginTop: '10px' }} />
        </div>
        <Calender />
      </div>
    </div>
  );
};

export default Home;
