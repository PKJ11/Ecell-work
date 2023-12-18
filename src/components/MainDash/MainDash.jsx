import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = (props) => {
  return (
    <div>
      <h1 className="navbar">{props.heading}</h1>
      <div className="MainDash">
      <Cards />
      <Table />
    </div>
    </div>
  );
};

export default MainDash;
