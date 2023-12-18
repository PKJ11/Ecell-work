import React from "react";
import Sidebar from "../../components/Sidebar";
import MainDash from "../../components/MainDash/MainDash";
import RightSide from "../../components/RigtSide/RightSide";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const buttonPosition = isCalendarVisible
    ? { right: window.innerWidth - 1215 } // Adjust the value based on your calendar component width
    : { right: 0 };
  return (
    <div className="AppGlass">
      <Sidebar />
      <MainDash />
      <div style={{ position: "relative" }}>
        <div style={{ position: "relative" }}>
          <button
            style={{
              position: "fixed",
              top: 0,
              ...buttonPosition,
              // margin: "10px",
              padding: "10px",
              width: "77px",
              height: "286px",
              cursor: "pointer",
              background: "#23B4FF",
              transition: "right 0.3s ease",
            }}
            onClick={toggleCalendar}
            className="grid"
          >
            <span>C</span>
            <span>A</span>
            <span>L</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
            <span>A</span>
            <span>R</span>
          </button>
          {isCalendarVisible && <RightSide />}
        </div>
      </div>
    </div>
  );
};

export default Home;
