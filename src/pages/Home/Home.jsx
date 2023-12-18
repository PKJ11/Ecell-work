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
        <Sidebar/>
        <MainDash/>
        {/* <RightSide/> */}
      </div>
    </div>
  );
};

export default Home;
