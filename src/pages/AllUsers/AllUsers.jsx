import React from "react";
import Sidebar from "../../components/Sidebar";
import Calender from "../../components/Calender";
import MainDash from "../../components/MainDash/MainDash";
import Table2 from "../../components/Table2/Table2";
import "./AllUsers.css";

const AllUsers = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="EnWrapper" style={{ backgroundColor: 'rgb(0, 0, 0, 0.1)', overflowX: 'hidden'}}>
        <MainDash heading="All Users" />

        {/* Centered Grid with two rows */}
        <div className="GridContainer" style={{ marginBottom: '20px', margin: '0 auto',marginLeft:'27px' }}>
          {/* First row with a div and a Table2 inside the div */}
          <div className="GridItem">
            {/* Content for the first div */}
            <Table2 heading = "User Informations"/>
          </div>
        </div>

        {/* Div below the GridContainer with a grid containing two columns */}
        <div className="AdditionalGridContainer" style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
          {/* First column */}
          <div className="Column" style={{ width: '49%', marginRight: '2%' }}>
            {/* Content for the first column */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
            <Table2 heading="User Activity"/>
            </div>
          </div>

          {/* Second column */}
          <div className="Column" style={{ width: '49%' }}>
            {/* Content for the second column */}
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
              <Table2 heading="User "/>
            </div>
          </div>
        </div>

        <Calender />
      </div>
    </div>
  );
};

export default AllUsers;





