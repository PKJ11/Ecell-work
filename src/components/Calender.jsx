import React from "react";
import RightSide from "./RigtSide/RightSide";
import { useState } from "react";
import { findAllByText } from "@testing-library/react";
// import "./Home.css";

const Calender = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const buttonPosition = isCalendarVisible
    ? { right: window.innerWidth - 1215 } // Adjust the value based on your calendar component width
    : { right: 0 };
  return (
    <div style={{ position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <button
            style={{
              position: "fixed",
              top: 0,
              ...buttonPosition,
              // margin: "10px",
              marginTop:"3.25%",
              padding: "10px",
              width: "77px",
              height: "fit-content",
              cursor: "pointer",
              background: "#23B4FF",
              transition: "right 0.3s ease",
              zIndex:"100",
            }}
            onClick={toggleCalendar}
            className="grid"
          >
            <span style={{ fontSize: '16px' }}>C</span>
            <span style={{ fontSize: '16px' }}>A</span>
            <span style={{ fontSize: '16px' }}>L</span>
            <span style={{ fontSize: '16px' }}>E</span>
            <span style={{ fontSize: '16px' }}>N</span>
            <span style={{ fontSize: '16px' }}>D</span>
            <span style={{ fontSize: '16px' }}>A</span>
            <span style={{ fontSize: '16px' }}>R</span>
          </button>
          {isCalendarVisible && <RightSide />}
        </div>
      </div> 
  );
};

export default Calender;
