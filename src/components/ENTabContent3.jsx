import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const ENTabContent3 = () => {
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto auto auto', gap: '20px',background:'white',padding:'20px' }}>
      {/* First Row: Four buttons with blue color */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '20px' }}>
        <button style={{
            backgroundColor: '#23B4FF',
            padding: '10px 20px',
            borderRadius: '5px',
            color: '#fff',
            cursor: 'pointer',
            height: '35px',
            border: 'none', // Remove border
            boxShadow: '0 2px 4px rgba(35, 180, 255, 0.3)', // Add box shadow
          }}>Button 1</button>
        <button style={{
            backgroundColor: '#23B4FF',
            padding: '10px 20px',
            borderRadius: '5px',
            color: '#fff',
            cursor: 'pointer',
            height: '35px',
            border: 'none', // Remove border
            boxShadow: '0 2px 4px rgba(35, 180, 255, 0.3)', // Add box shadow
          }}>Button 2</button>
        <button style={{
            backgroundColor: '#23B4FF',
            padding: '10px 20px',
            borderRadius: '5px',
            color: '#fff',
            cursor: 'pointer',
            height: '35px',
            border: 'none', // Remove border
            boxShadow: '0 2px 4px rgba(35, 180, 255, 0.3)', // Add box shadow
          }}>Button 3</button>
        <button style={{
            backgroundColor: '#23B4FF',
            padding: '10px 20px',
            borderRadius: '5px',
            color: '#fff',
            cursor: 'pointer',
            height: '35px',
            border: 'none', // Remove border
            boxShadow: '0 2px 4px rgba(35, 180, 255, 0.3)', // Add box shadow
          }}>Button 4</button>
      </div>

      {/* Second Row: Four boxes with rgb(0,0,0,0.1) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '20px' }}>
        <div style={{ backgroundColor: 'rgb(0,0,0,0.1)', padding: '20px', borderRadius: '5px', height: '150px' }}>Box 1</div>
        <div style={{ backgroundColor: 'rgb(0,0,0,0.1)', padding: '20px', borderRadius: '5px', height: '150px' }}>Box 2</div>
        <div style={{ backgroundColor: 'rgb(0,0,0,0.1)', padding: '20px', borderRadius: '5px', height: '150px' }}>Box 3</div>
        <div style={{ backgroundColor: 'rgb(0,0,0,0.1)', padding: '20px', borderRadius: '5px', height: '150px' }}>Box 4</div>
      </div>

      {/* Third Row: Table2 */}
      <div className='TableContainer' style={{ width: '100%', margin: '20px 0', border: 'none', backgroundColor: 'white' }}>
                            <MDBTable className='caption-top' style={{ width: '100%', border: 'none' }}>
                                {/* <caption style={{ fontWeight: 'bold', fontSize: '20px' }}>{props.heading}</caption> */}

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
  );
}

export default ENTabContent3;



