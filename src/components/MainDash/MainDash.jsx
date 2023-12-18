import React from "react";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div>
      <h1 className="navbar">Budget and Prioritization</h1>
      <div className="MainDash">
      <Table />
    </div>
    </div>
  );
};

export default MainDash;
