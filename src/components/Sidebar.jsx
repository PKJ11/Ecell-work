import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);
  const navigate = useNavigate();
  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <div className="logo">
          <span>
            DPD Marketing and Analytics Tool
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? 'menuItem active' : 'menuItem'}
              key={index}

              onClick={() => {
                const navigatelink = `${item.navigate}`
                setSelected(index); 
                navigate(navigatelink) ;
              }}
            >
              <item.icon className={selected === index ? 'icon' : ''} />
              <span className={selected === index ? 'text' : ''}>{item.heading}</span>
            </div>
          ))}
          <div className="menuItem">
            {/* signoutcode */}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
