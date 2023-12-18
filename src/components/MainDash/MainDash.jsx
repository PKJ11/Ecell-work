import React from "react";
// import Cards from "../Cards/Cards";
// import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = (props) => {
  return (
    <div className="MainDash">
      <h1 className="navbar">{props.heading}</h1>
    </div>
  );
};

export default MainDash;
