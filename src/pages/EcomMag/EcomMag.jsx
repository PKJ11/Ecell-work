import React, { useState,useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import Calender from '../../components/Calender';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Table2 from "../../components/Table2/Table2"
import img1 from "../../imgs/Ecom_ad.jpg"
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const EcomMag = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedTabText, setSelectedTabText] = useState("Subscribers");

    const handleTabClick = (index, tabText) => {
        setActiveTab(index);
        setSelectedTabText(tabText);
    };

    const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=At1tbqjNHz4h27jcJi8w51HfCFOuAHkjIaQY7e5AX8rt1OuAeMenrrZ-m6MOGPkw_SC8r34Zd7ssRwnnfewywa6AQ_qVxu6Sm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDFcFKvKb0lq1jWpvlsKFcbkqB8eDTOBLYTxmTy8-AkSYDntaYPCBsOn7J7Fmb_QkF_-hnURgab2Nt_0R5gPkC2kJNnJQKBKJdz9Jw9Md8uu&lib=M5YE5VGB9A1RAHxyEtBAhynDHy3CBpolr')
      .then(response => response.json())
      .then(data => setTableData(data.slice(0,4)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
                <MainDash heading="E-Commerce Manager" />
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
                            
                            <Tab style={getTabStyle(2)} onClick={() => handleTabClick(2, "Notifications")}>
                                Products
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
                                            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Add Account
                                            </a>
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Configure
                                            </a>
                                        </button>
                                    </div>
                                </div>

                                {/* Content for the first row, second column */}
                                <div style={{ background: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                                        FlipKart
                                    </div>

                                    {/* Second row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Add Account
                                            </a>
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Configure
                                            </a>
                                        </button>
                                    </div>
                                </div>

                                <div style={{ background: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                                        Shopify
                                    </div>

                                    {/* Second row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Add Account
                                            </a>
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Configure
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                <div style={{ background: 'white', padding: '20px' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '26px' }}>
                                        Coustom
                                    </div>

                                    {/* Second row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Add Account
                                            </a>
                                        </button>
                                        <button style={{ backgroundColor: 'rgb(35, 180, 255)', color: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width: '45%' }}>
                                            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Configure
                                            </a>
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
                            <div style={{ marginBottom: "40px", marginTop: "20px", marginLeft: "40px" }}>
                                <MDBTable className='caption-top' style={{ width: '83%', border: 'none' }}>
                                    <caption style={{ fontWeight: 'bold', fontSize: '20px' }}>Database</caption>

                                    <MDBTableHead>
                                        <tr>
                                            <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Name</th>
                                            <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Email id's</th>
                                            <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Persona</th>
                                            <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Custom_Name</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {tableData.slice(0, 20).map((row, index) => (
                                            <tr key={index}>
                                                <th scope='row'>{row['a-size-base 2']} {row['a-size-base 6']}</th>
                                                <td>{row['a-link-normal href']}</td>
                                                <td>{row['a-size-base 3']}</td>
                                                <td>{row['a-size-base 4']}</td>
                                            </tr>
                                        ))}
                                    </MDBTableBody>
                                </MDBTable>
                            </div>


                        </TabPanel>
                    </Tabs>
                </div>
                <Calender />
            </div>
        </div>
    );
};


export default EcomMag
