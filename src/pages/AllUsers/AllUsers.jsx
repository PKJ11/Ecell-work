import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/Sidebar";
import Calender from "../../components/Calender";
import MainDash from "../../components/MainDash/MainDash";
import Table2 from "../../components/Table2/Table2";
import "./AllUsers.css";

const AllUsers = () => {
  const [tableData1, setTableData1] = useState([]);
  const [tableData2, setTableData2] = useState([]);
  const [combinedTableData, setCombinedTableData] = useState([]);

  useEffect(() => {
    // Fetch data from the first API
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=Jy40SqpbdtBj2Zd3mGo5jZlOaWUxDHF5hu8EA4TjX5tk2RKXmssoTvA7L3AMrudxq-3m8Gl2hLQSYqo0XFGHA96JqEB5OMN9m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLfvJf_o_iPhRPM__9tE7qe60hAUF2lby2iuuAGwI5HZR4hHiU4Y11_xGJXH9_dWIwk9uo6GEhoGycjIMDyCDq4IER33P6W69A&lib=MdbtOfnSruU9RUOXhitkfu0Vp6YMwRWVE')
      .then(response => response.json())
      .then(data => setTableData1(data))
      .catch(error => console.error('Error fetching data from API 1:', error));

    // Fetch data from the second API
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=Ra4XYB049SrWi_2Si5gsxsRVYyxMvUsZ4rVbAEhJO6aJIN84ex9Kigy9iEG7KkciBS8CgsGiIswg04d0-9shjlvEnA0XadFqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnB53F5Vf9qIC8Kxy2pejJ8GDj6IbKmKAuHKT1A0YkqnPqWOtZBtuNIx4JxIUjtwQHmSr-WctClGEBP9vj-95blESQ_tuX0y72g&lib=MyAg5H_nyry9cixkCKH8yroAnPvVPRreW')
      .then(response => response.json())
      .then(data => setTableData2(data))
      .catch(error => console.error('Error fetching data from API 2:', error));
  }, []);

  useEffect(() => {
    // Combine data from both APIs when persona is the same
    const combinedData = tableData1.map(item1 => {
      const matchingItem2 = tableData2.find(item2 => item2.PERSONA === item1.PERSONA);
      return { ...item1, ...matchingItem2 };
    });

    setCombinedTableData(combinedData.filter(Boolean)); // Filter out items with no matching persona
  }, [tableData1, tableData2]);
  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="EnWrapper" style={{ backgroundColor: 'rgb(0, 0, 0, 0.1)', overflowX: 'hidden' }}>
        <MainDash heading="All Users" />
        <div style={{ marginBottom: "40px", marginTop: "20px", marginLeft: "40px" }}>
          <table style={{ width: '100%', border: '1px solid #ddd', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>PERSONA</th>
                <th>Mail Open Rate</th>
                <th>Ads Conversion %</th>
                <th>Notifications Enable</th>
                <th>Creator Follow</th>
                <th>Track 1</th>
                {/* <th>History</th> */}
                {/* Add additional headers based on your data structure */}
              </tr>
            </thead>
            <tbody>
              {combinedTableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.PERSONA}</td>
                  <td>{row.mail_open_rate}</td>
                  <td>{row['Ads_conversion%']}</td>
                  <td>{row.notifications_enable}</td>
                  <td>{row.creator_follow}</td>
                  <td>{row.track_1}</td>
                  <td>{row.history}</td>
                  {/* Add additional columns based on your data structure */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <Calender />
    </div>

  );
};

export default AllUsers;





