import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import Calender from '../../components/Calender';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./EN.css"
import Table2 from "../../components/Table2/Table2"
import Table3 from '../../components/table3';

const EmployementNews = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTabText, setSelectedTabText] = useState("Subscribers");

  const handleTabClick = (index, tabText) => {
    setActiveTab(index);
    setSelectedTabText(tabText);
  };

  const getTabStyle = (index) => {
    return {
      padding: '10px',
      cursor: 'pointer',
      marginRight: '40px',
      borderRadius: '5px',
      background:
        activeTab === index
          ? 'linear-gradient(to right, rgb(35, 180, 255), rgb(0, 102, 204))'
          : 'rgba(35, 180, 255, 0.8)',
      color: '#fff',
      boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)',
      marginBottom:'30px',
    };
  };

  return (
    <div className='AppGlass'>
      <Sidebar />
      <div className="EnWrapper" style={{ backgroundColor: 'rgb(0,0,0,0.1)',overflowX: 'hidden'}}>
        <MainDash />
        <div className='TabContainer'>
          <Tabs>
            <TabList
              style={{
                display: 'flex',
                listStyle: 'none',
                padding: 0,
                borderBottom: 'none', // Remove bottom border
              }}
            >
              <Tab style={getTabStyle(0)} onClick={() => handleTabClick(0, "Subscribers")}>
                Subscribers
              </Tab>
              <Tab style={getTabStyle(1)} onClick={() => handleTabClick(1, "Advertisements and Promotions")}>
                Advertisements and Promotions
              </Tab>
              <Tab style={getTabStyle(2)} onClick={() => handleTabClick(2, "Notifications")}>
                Notifications
              </Tab>
            </TabList>

            <TabPanel>
              <Table2 heading={selectedTabText} />
              <div className='TableContainer' style={{ width: '85%', margin: '20px 0', border: 'none', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)', padding: '20px' , backgroundColor:'white'}}>
                <caption style={{ fontWeight: 'bold', fontSize: '20px' , width: '300px'}}>Promotion Campaings</caption>

                <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', borderRadius: '5px' }}>
                  {/* Your content for the grid goes here */}
                  <div style={{ backgroundColor: '#23B4FF', padding: '20px', borderRadius: '5px' }}>Grid Item 1</div>
                  <div style={{ backgroundColor: '#23B4FF', padding: '20px', borderRadius: '5px' }}>Grid Item 2</div>
                  <div style={{ backgroundColor: '#23B4FF', padding: '20px', borderRadius: '5px' }}>Grid Item 3</div>
                  <div style={{ backgroundColor: '#23B4FF', padding: '20px', borderRadius: '5px' }}>Grid Item 4</div>
                </div>
              </div>

            </TabPanel>
            <TabPanel>
              <Table3 heading={selectedTabText}/>
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
          </Tabs>
        </div>
        <Calender />
      </div>
    </div>
  );
};

export default EmployementNews;

