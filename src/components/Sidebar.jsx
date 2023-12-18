import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = ({heading,setheading}) => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <span>
          DPD Marketing and Analytics Tool
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() =>{
                setheading(SidebarData[index].heading);
                setSelected(index);
              }}
            ><Link to={`/${index+1}`} style={{textDecoration:"none",color:"inherit"}}>
            <item.icon className={selected === index ? "icon" : ""} style={{padding:"0px 4px"}} />
            <span className={selected === index ? "text" : ""} >{item.heading}</span>
            </Link>
            </div>
          );
        })}
       
        <div className="menuItem">
         {/* signoutcode */}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
