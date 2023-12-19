import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function App(props) {
  return (
    <div className='TableContainer' style={{ width: '85%',margin: '20px 0', border: 'none', padding: '20px',backgroundColor:'white' }}>
      <MDBTable className='caption-top' style={{ width: '98%', border: 'none' }}>
      <caption style={{ fontWeight: 'bold', fontSize: '20px' }}>{props.heading}</caption>

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
            <td  style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>Larry</td>
            <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>the Bird</td>
            <td style={{ backgroundColor: 'rgba(35, 180, 255, 0.5)', borderBottom: 'none' }}>@twitter</td>
          </tr>
          <tr  style={{ borderBottom: 'none' }}>
            <th scope='row' style={{ borderBottom: 'none' }}>2</th>
            <td style={{ borderBottom: 'none' }}>Jacob</td>
            <td style={{ borderBottom: 'none' }}>Thornton</td>
            <td style={{ borderBottom: 'none' }}>@fat</td>
          </tr>
         
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
