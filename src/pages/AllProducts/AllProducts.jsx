import React from "react";
import Sidebar from "../../components/Sidebar";
import "./AllProducts.css";
import Calender from "../../components/Calender";
import MainDash from "../../components/MainDash/MainDash";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const AllProducts = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="EnWrapper" style={{ backgroundColor: 'rgb(0,0,0,0.1)', overflowX: 'hidden' }}>
        <MainDash heading="All Products" />

        {/* White container with row-wise grid */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', marginTop: '20px', display: 'grid', gridTemplateRows: '1fr ', gap: '20px', width: '85%', margin: '20px auto' }}>
          {/* First row with Table2 */}
          <div className='TableContainer' style={{ width: '100%', margin: '20px 0', border: 'none', padding: '20px', backgroundColor: 'white' }}>
            <MDBTable className='caption-top' style={{ width: '98%', border: 'none' }}>
              <caption style={{ fontWeight: 'bold', fontSize: '20px' }}>Product Strategy</caption>

              <MDBTableHead>
                <tr>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>#</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>First</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Last</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Handle</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr style={{ borderBottom: 'none' }}>
                  <th scope='row' style={{ borderBottom: 'none' }}>1</th>
                  <td style={{ borderBottom: 'none' }}>Mark</td>
                  <td style={{ borderBottom: 'none' }}>Otto</td>
                  <td style={{ borderBottom: 'none' }}>@mdo</td>
                </tr>
                <tr style={{ borderBottom: 'none' }}>
                  <th scope='row' style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>3</th>
                  <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>Larry</td>
                  <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>the Bird</td>
                  <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>@twitter</td>
                </tr>
                <tr style={{ borderBottom: 'none' }}>
                  <th scope='row' style={{ borderBottom: 'none' }}>2</th>
                  <td style={{ borderBottom: 'none' }}>Jacob</td>
                  <td style={{ borderBottom: 'none' }}>Thornton</td>
                  <td style={{ borderBottom: 'none' }}>@fat</td>
                </tr>

              </MDBTableBody>
            </MDBTable>
          </div>

          {/* Second row with Table2 */}
          
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', marginTop: '20px', display: 'grid', gridTemplateRows: '1fr ', gap: '20px', width: '85%', margin: '0 auto' }}>
        <div className='TableContainer' style={{ width: '100%', margin: '20px 0', border: 'none', padding: '20px', backgroundColor: 'white' }}>
            <MDBTable className='caption-top' style={{ width: '98%', border: 'none' }}>
              <caption style={{ fontWeight: 'bold', fontSize: '20px' }}>User Persona Startegy</caption>
              {/* <p>Lorem ipsum dolor sit amet.</p> */}
              <MDBTableHead>
                <tr>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>#</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>First</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Last</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Handle</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr style={{ borderBottom: 'none' }}>
                  <th scope='row' style={{ borderBottom: 'none' }}>1</th>
                  <td style={{ borderBottom: 'none' }}>Mark</td>
                  <td style={{ borderBottom: 'none' }}>Otto</td>
                  <td style={{ borderBottom: 'none' }}>@mdo</td>
                </tr>
                <tr style={{ borderBottom: 'none' }}>
                  <th scope='row' style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>3</th>
                  <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>Larry</td>
                  <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>the Bird</td>
                  <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>@twitter</td>
                </tr>
                <tr style={{ borderBottom: 'none' }}>
                  <th scope='row' style={{ borderBottom: 'none' }}>2</th>
                  <td style={{ borderBottom: 'none' }}>Jacob</td>
                  <td style={{ borderBottom: 'none' }}>Thornton</td>
                  <td style={{ borderBottom: 'none' }}>@fat</td>
                </tr>

              </MDBTableBody>
            </MDBTable>
          </div>
          </div>
        <Calender />
      </div>
    </div>
  );
};

export default AllProducts;


