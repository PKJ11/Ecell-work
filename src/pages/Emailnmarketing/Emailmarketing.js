import React, { useState, useEffect } from 'react';
import "./Emailmarketing.css"
import "../SEO/seo.css";
import { emailMaarketing } from '../../Data/Data';
import { Button } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import Calender from "../../components/Calender.jsx";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import img1 from "../../imgs/img1.jpg"
import img2 from "../../imgs/img2.jpg"
import img3 from "../../imgs/img3.jpg"
import report from "../../imgs/Report Email Marketing.png"
const Emailmarketing = () => {

  const [selected, setSelected] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=qcHDfGy3yCVIYrJwPxLfOqHvDqSB24MQeMt4jaufLCBqcEV7K8S2uyiB3WaZy3l_JxE1JFky34q0f9JoEAyVgUnnB3aGEAY9m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJQOCyQZm5tmdf4eqHH8JqOOKUsI0NIVBSU3roOAblzAsfxXJfe6T60uocu7BXbCgpq4fH1hn4pvx59w5hcUoB0l1dOIQn05MQ&lib=MHVz5cSVcEeGmoFTRMU6nlUVp6YMwRWVE')
      .then(response => response.json())
      .then(data => setTableData(data.slice(0, 20)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const imageContainerStyle = {
    height: '60%', // Adjusted container height
    display: 'flex',
    width: '100%',
    marginTop: '30px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    height: '400px', // Adjusted image height
    width: '20%',
    marginRight: '20px',
    cursor: 'pointer',
    border: '1px solid transparent',
  };

  const activeImageStyle = {
    border: '1px solid red',
  };

  const renderImage = (index, imagePath, label) => (
    <div
      key={index}
      style={{ ...imageStyle, ...(activeIndex === index ? activeImageStyle : {}) }}
      onClick={() => handleClick(index)}
    >
      <div style={{ height: '80%', display: 'flex', flexDirection: 'column' }}>
        <img src={imagePath} alt={`Image ${index + 1}`} style={{ height: '100%', width: '100%' }} />
        <p>{label}</p>
      </div>
    </div>
  );

  return (
    <div className='AppGlass' style={{ gridTemplateColumns: "11rem auto 0rem" }}>
      <Sidebar />
      <div>
        <MainDash heading="EMail Marketing" />
        <div className='header'>
          <h2>Prototype</h2>
        </div>
        <div className='displaycard'>
          {
            emailMaarketing.slice(0, 5).map((item, index) => {
              return (
                <div className={selected === index ? "displaycards activate" : "displaycards"}
                  key={index}
                  onClick={() => {
                    setSelected(index);
                  }}>
                  <span>{item.heading}</span>
                </div>
              )
            })
          }
        </div>
        {
          selected === 0 && (
            <div style={imageContainerStyle}>
              {renderImage(0, img1, 'Onboarding Template')}
              {renderImage(1, img2, 'Discounting Template')}
              {renderImage(2, img3, 'Abandoned Template')}
            </div>

          )
        }
        {
          selected === 1 && (
            <div className='display1'>
              <h2>Mail Chimp</h2>
              <p>A Brief Description</p>
              <div className='box'>
                <a href="https://mailchimp.com" target="_blank" rel="noopener noreferrer">
                  <div className="displaycards activate">
                    <span>Configure</span>
                  </div>
                </a>
                <a href="https://mailchimp.com" target="_blank" rel="noopener noreferrer">
                  <div className="displaycards activate">
                    <span>Add Account</span>
                  </div>
                </a>
              </div>
            </div>

          )
        }

        {
          selected === 2 && (
            <div>
              <div className='display2'>
                <h2>Data Source</h2>
                <p></p>
                <div className='box' style={{ padding: "0 0", width: "90%" }}>
                  <div className="displaycards activate">
                    <span>Data from Web-based source(external)</span>
                  </div>
                  <div className="displaycards activate">
                    <span>Data from Existing Database</span>
                  </div>
                </div>
              </div>
              <div>
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
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <th scope='row'>{row.Custom_Name}</th>
                          <td>{row['Email-ids']}</td>
                          <td>{row.Persona}</td>
                          <td>{row.Custom_Name}</td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </div>
              </div>


            </div>
          )
        }


        {
          selected === 3 && (
            <div className='display2' style={{ height: "60%" }}>
              <h2>Report</h2>
              <p></p>
              <div className='box' style={{ padding: "0 0", width: "90%" }}>
                <div className="displaycards activate">
                  <span>Open</span>
                </div>
                <div className="displaycards activate">
                  <span>Edit*</span>
                </div>
                <div className="displaycards activate">
                  <span>Edit*</span>
                </div>
              </div>
              <div style={{ width: "90%", margin: "auto" }}>
                <img src={report} alt="Report Image" style={{ width: "100%", height: "80%", objectFit: "contain" }} />
              </div>
            </div>



          )
        }

      </div>
      <Calender />
    </div>
  );
}

export default Emailmarketing;


// <AllProducts heading="Database" subheading="A brief description"/>
