import React from "react";
import "./seo.css";
import AllProducts from "../AllProducts/AllProducts.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import MainDash from "../../components/MainDash/MainDash.jsx";
import Calender from "../../components/Calender.jsx";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const SEO = ({heading,setheading}) => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="EnWrapper" style={{ backgroundColor: 'rgb(0,0,0,0.1)', overflowX: 'hidden' }}>
        <MainDash heading="SEO Prototype" />

        {/* White div with Real-Time Statistical View */}
        <div className='TableContainer' style={{ width: '100%', border: 'none', padding: '30px ', backgroundColor: 'white' }}>
<div style={{height:"100vh"}}>
<div className="MainDash">
 <h2 className="seotext">SEO Report</h2> 
 <div className="seocards">
  <div className="cards"></div>
  <div className="cards"></div>
  <div className="cards"></div>
 </div>
</div>
<div style={{height:"30%",marginTop:"30px",display:"flex",flexDirection:"row"}}>
<div className="MainDash" style={{width:"30%",height:"100%"}}>
<h2 className="seotext">KPIS</h2> 
<div className="seocards" style={{width:"100%"}}>
 <div className="cards" style={{width:"80%"}}></div>
</div>
</div>

<div className="MainDash" style={{width:"30%",height:"100%"}}>
<h2 className="seotext">Traffic</h2> 
<div className="seocards" style={{width:"100%"}}>
 <div className="cards" style={{width:"80%"}}></div>
</div>
</div>
</div>
<div style={{marginBottom:"40px",marginTop:"20px"}}>
<MDBTable className='caption-top' style={{ width: '98%', border: 'none' }}>
<caption style={{ fontWeight: 'bold', fontSize: '20px' }}>Product Strategy</caption>

<MDBTableHead>
  <tr>
    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Keyword</th>
    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Impressions</th>
    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Clics</th>
    <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>CTR</th>
  </tr>
</MDBTableHead>
<MDBTableBody>
  <tr style={{ borderBottom: 'none' }}>
    <th scope='row' style={{ borderBottom: 'none' }}>Keyword1</th>
    <td style={{ borderBottom: 'none' }}></td>
    <td style={{ borderBottom: 'none' }}></td>
    <td style={{ borderBottom: 'none' }}></td>
  </tr>
  <tr style={{ borderBottom: 'none' }}>
    <th scope='row' style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>Keyword3</th>
    <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}></td>
    <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}></td>
    <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}></td>
  </tr>
  <tr style={{ borderBottom: 'none' }}>
    <th scope='row' style={{ borderBottom: 'none' }}>Keyword2</th>
    <td style={{ borderBottom: 'none' }}></td>
    <td style={{ borderBottom: 'none' }}></td>
    <td style={{ borderBottom: 'none' }}></td>
  </tr>

</MDBTableBody>
</MDBTable>
</div>
</div>
</div>
<Calender />
</div>      
 </div>
  );
};

export default SEO
;
