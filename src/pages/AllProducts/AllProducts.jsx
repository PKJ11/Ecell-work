import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./AllProducts.css";
import RightSide from "../../components/RigtSide/RightSide";

const AllProducts = () => {
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
      {isCalendarVisible && <RightSide />}
    </div>
  );
};

export default AllProducts;
