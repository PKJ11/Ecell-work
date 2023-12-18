import React from "react";
import Table from "../../Table/Table";
import "./MainDash.css";
import AllProducts from "../../AllProducts/Producttable";
import Updates from "../../Updates/Updates";
const Screen9 = ({heading,setheading}) => {
  return (
    <div>
      <h1 className="navbar">{heading}</h1>
      <div className='header'>
                <h2>Real Time Statistical View</h2>
            </div>
    </div>
  );
};

export default Screen9
;
