import React from "react";
import Table from "../../Table/Table";
import "./seo.css";
import AllProducts from "../../AllProducts/Producttable";
import Updates from "../../Updates/Updates";
const SEO = ({heading,setheading}) => {
  return (
    <div style={{height:"100vh",overflowY:"auto"}}>
    <h1 className="navbar">{heading}</h1>
    <div className="MainDash">
     <h2 className="seotext">SEO Report</h2> 
     <div className="seocards">
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards"></div>
     </div>
    </div>
    <div style={{height:"30%",marginTop:"30px",display:"flex",flexDirection:"row"}}>
    <div className="MainDash" style={{width:"30%",height:"100%"}}>
    <h2 className="seotext">KPIS</h2> 
    <div className="seocards" style={{width:"100%"}}>
     <div className="cards" style={{width:"80%"}}></div>
    </div>
    </div>
    
    <div className="MainDash" style={{width:"30%",height:"100%"}}>
    <h2 className="seotext">Traffic</h2> 
    <div className="seocards" style={{width:"100%"}}>
     <div className="cards" style={{width:"80%"}}></div>
    </div>
    </div>
    </div>
    <div style={{marginBottom:"30px"}}>
    <AllProducts />
    </div>
    </div>
  );
};

export default SEO
;
