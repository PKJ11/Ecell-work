import React, { useState, useEffect } from "react";
import "./seo.css";
import AllProducts from "../AllProducts/AllProducts.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import MainDash from "../../components/MainDash/MainDash.jsx";
import Calender from "../../components/Calender.jsx";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import keyword from "../../imgs/Keywords.png";
import Traffic from "../../imgs/Traffic Graph.png";

const SEO = ({ heading, setheading }) => {
  const [seoData, setSeoData] = useState([]);

  useEffect(() => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=torsU_yj52dor1Bgp98-zA0xgbT6e5HoMhWTsZbPmE3mURgaYBSZfoB6VJxZeG02Boqm-BzOreNgxDHcXnDX1Nf0C_BcuOLDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFE0OdXTosGlD6dyoUb2aH8C5nOER6sWuOkO8SVgKEoHPwZHrh-acUFPzTiKr4HBedDlczIPKv8tvn2gVUuw72RNogzSVR0e9A&lib=MLrpy3eZTC0pPBQu9W2EmUEVp6YMwRWVE')
      .then(response => response.json())
      .then(data => setSeoData(data))
      .catch(error => console.error('Error fetching SEO data:', error));
  }, []);

  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="EnWrapper" style={{ backgroundColor: 'rgb(0,0,0,0.1)', overflowX: 'hidden' }}>
        <MainDash heading="SEO Prototype" />

        {/* White div with Real-Time Statistical View */}
        <div className='TableContainer' style={{ width: '100%', border: 'none', padding: '30px ', backgroundColor: 'white' }}>
          <div style={{ height: "100vh" }}>

            <div style={{ marginBottom: "40px", marginTop: "20px" }}>
              <MDBTable className='caption-top' style={{ width: '98%', border: 'none' }}>
                <caption style={{ fontWeight: 'bold', fontSize: '20px' }}>Seo Keyword Generator - Untold Stories of the Freedom Struggle from North-East India</caption>

                <MDBTableHead>
                  <tr>
                    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Keyword</th>
                    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Rank</th>
                    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Relavancy</th>
                    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Impressions</th>
                    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Clicks</th>
                    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>FITNESS</th>
                    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>PERSEVERANCE</th>
                    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>BESTNESS</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {seoData.map((row, index) => (
                    <tr key={index}>
                      <th scope='row'>{row.Keyword}</th>
                      <th scope='row'>{row.RANK}</th>
                      <th scope='row'>{row.Relevancy}</th>
                      <td>{row["YEARLY IMPRESSIONS"]}</td>
                      <td>{row["YEARLY CLICKS"]}</td>
                      <td>{row.FITNESS}</td>
                      <td>{row.PERSEVERANCE}</td>
                      <td>{row.BESTNESS}</td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', gap: '20px', height: '300px' }}>
  {/* First div with image keyword */}
  <div style={{ backgroundColor: 'white', height: '100%' }}>
    <img src={keyword} alt="Keyword" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
  
  {/* Second div with image traffic */}
  <div style={{ backgroundColor: 'white', height: '100%' }}>
    <img src={Traffic} alt="Traffic Graph" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
</div>

          </div>
        </div>
        <Calender />
      </div>
    </div>
  );
};

export default SEO;




