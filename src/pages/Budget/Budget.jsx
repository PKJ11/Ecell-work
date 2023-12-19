import React from "react";
import Sidebar from "../../components/Sidebar";
import Calender from "../../components/Calender";
import MainDash from "../../components/MainDash/MainDash";
import Table2 from "../../components/Table2/Table2";

const Budget = () => {
    return (
        <div className="AppGlass">
            <Sidebar />
            <div className="EnWrapper" style={{ backgroundColor: 'rgb(0, 0, 0, 0.1)', overflowX: 'hidden' }}>
                <MainDash heading="Budget And Prioritisations" />


                <div className="GridContainer" style={{ marginBottom: '20px', width: '90%', margin: '0 auto', marginLeft: '27px', background: 'white', padding: '20px' }}>
                    <div className="GridItem">
                        {/* Row 1 */}
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                            <div className="row1" style={{ marginRight: '10px' }}>
                                <strong style={{ fontSize: '25px' }}>Budget</strong>
                                <p style={{ fontSize: 'small', marginTop: '5px' }}>Enter Budget for digits marketing campaign</p>
                            </div>

                            <button
                                style={{
                                    backgroundColor: 'rgb(35, 180, 255)',
                                    color: 'white',
                                    border: 'none',
                                    opacity: 0.5,
                                    transition: 'background-color 0.3s, opacity 0.3s',
                                    fontSize: '18px',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    padding: '10px 20px', // Adjust the padding values as needed
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = 'rgba(35, 180, 255, 0.5)';
                                    e.target.style.opacity = 1;
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = 'rgb(35, 180, 255)';
                                    e.target.style.opacity = 0.5;
                                }}
                            >
                                INR 99999999
                            </button>


                        </div>


                        {/* Row 2 */}
                        <h1>Marketing Campaigns</h1>

                        {/* Row 3 */}
                        <div style={{ height: '150px', background: 'rgba(0, 0, 0, 0.1)' }}></div>
                    </div>
                </div>


                <div className="GridContainer" style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>

                    <div className="Column" style={{ width: '49%', marginRight: '2%' }}>

                        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
                            <Table2 heading="User Activity" />
                        </div>
                    </div>


                    <div className="Column" style={{ width: '49%' }}>

                        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
                            <Table2 heading="User " />
                        </div>
                    </div>
                </div>

                <Calender />
            </div>
        </div>
    );
}

export default Budget
