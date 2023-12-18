import React from "react";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = ({heading,setheading}) => {
  return (
    <div>
      <h1 className="navbar">{heading}</h1>
      <div className="MainDash">
      <Table />
    </div>
    </div>
  );
};

export default MainDash;
