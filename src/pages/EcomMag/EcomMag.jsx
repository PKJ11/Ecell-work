import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import Calender from '../../components/Calender';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Table2 from "../../components/Table2/Table2"


const EcomMag = () => {
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
        };
    };

    return (
        <div className='AppGlass'>
            <Sidebar />
            <div className="EnWrapper" style={{ backgroundColor: 'rgb(0,0,0,0.1)', overflowX: 'hidden' }}>
                <MainDash heading="Employement News" />
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
                                Accounts
                            </Tab>
                            <Tab style={getTabStyle(1)} onClick={() => handleTabClick(1, "Advertisements and Promotions")}>
                                Products
                            </Tab>
                            <Tab style={getTabStyle(2)} onClick={() => handleTabClick(2, "Notifications")}>
                                Strategy
                            </Tab>
                        </TabList>

                        <TabPanel>

                            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {/* Content for the first row, first column */}
                                <div style={{ background: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                                        Amazon
                                    </div>

                                    {/* Second row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', }}>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            Button 1
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            Button 2
                                        </button>
                                    </div>
                                </div>

                                {/* Content for the first row, second column */}
                                <div style={{ background: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                                        Amazon
                                    </div>

                                    {/* Second row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            Button 1
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            Button 2
                                        </button>
                                    </div>
                                </div>

                                <div style={{ background: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                                        Amazon
                                    </div>

                                    {/* Second row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            Button 1
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            Button 2
                                        </button>
                                    </div>
                                </div>
                                <div style={{ background: 'white', padding: '20px' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                                        Amazon
                                    </div>

                                    {/* Second row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            Button 1
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            Button 2
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', background: 'white', padding: '20px', gap: '20px', marginTop: '20px' }}>
                                {/* First row */}
                                <div >
                                    <strong style={{ fontSize: '16px' }}>Amazon</strong>
                                    <p style={{ fontSize: 'small' }}>Insight</p>
                                    <div style={{ display: 'flex' }}>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '25%', marginRight: '10px' }}>
                                            Button 1
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '25%', marginRight: '10px' }}>
                                            Button 2
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '25%', marginRight: '10px' }}>
                                            Button 3
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '25%', marginRight: '10px' }}>
                                            Button 4
                                        </button>
                                    </div>
                                </div>

                                {/* Second row */}
                                <div>
                                    <p>Kindle</p>
                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Kindle Button
                                    </button>
                                </div>
                            </div>


                        </TabPanel>
                        <TabPanel>
                            <Table2 heading={selectedTabText} />
                            <div className='TableContainer' style={{ width: '85%', margin: '20px 0', border: 'none', padding: '20px' }}>
                                <caption style={{ fontWeight: 'bold', fontSize: '20px', width: '300px' }}>Promotion Campaings</caption>

                                <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px', borderRadius: '5px' }}>

                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Kindle Button
                                    </button>
                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Kindle Button
                                    </button>
                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Kindle Button
                                    </button>
                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Kindle Button
                                    </button>
                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Kindle Button
                                    </button>
                                    <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                                        Kindle Button
                                    </button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <Table2 heading={selectedTabText} />
                            

                        </TabPanel>
                    </Tabs>
                </div>
                <Calender />
            </div>
        </div>
    );
};


export default EcomMag
