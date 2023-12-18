import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "./AllProducts.css";
import Calender from "../../components/Calender";
import MainDash from "../../components/MainDash/MainDash";


const AllProducts = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <MainDash heading = "All Products"/>
      <Calender/>
    </div>
  );
};

export default AllProducts;
