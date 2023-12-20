import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import Calender from '../../components/Calender';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./EN.css"
import Table2 from "../../components/Table2/Table2"
import Table3 from '../../components/table3';
import ENTabContent3 from '../../components/ENTabContent3';
import img1 from "../../imgs/Ecom_ad.jpg"

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
        <MainDash heading="Employement News"/>
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
              <Tab style={getTabStyle(0)} onClick={() => handleTabClick(0, "Advertisements and Promotions")}>
              Advertisements and Promotions
              </Tab>
              <Tab style={getTabStyle(1)} onClick={() => handleTabClick(1, "Subscribers")}>
                Subscribers
              </Tab>
              <Tab style={getTabStyle(2)} onClick={() => handleTabClick(2, "Notifications")}>
                Notifications
              </Tab>
            </TabList>

            <TabPanel>
            <div style={{ backgroundColor: 'white', width: '95%', margin: 'auto', height: '400px' }}>
                                <img
                                    src={img1}  // Replace with your image URL
                                    alt="Your Image Alt Text"
                                    style={{ width: '95%', display: 'block', margin: 'auto', height: '90%' }}
                                />
                            </div>
                            <div className='TableContainer' style={{ width: '85%', margin: '20px 0', border: 'none', padding: '20px' }}>
                                <caption style={{ fontWeight: 'bold', fontSize: '20px', width: '300px' }}>Kindle</caption>

                                <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px', borderRadius: '5px' }}>

                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Add Accounts
                                    </button>
                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Configure
                                    </button>

                                </div>
                                </div>

            </TabPanel>
            <TabPanel>
              <Table3 heading={selectedTabText}/>
            </TabPanel>
            <TabPanel>
              <ENTabContent3/>
            </TabPanel>
          </Tabs>
        </div>
        <Calender />
      </div>
    </div>
  );
};

export default EmployementNews;

