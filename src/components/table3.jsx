import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Table3 = (props) => {
    return (
        <div>

            <div style={{ background: 'white', width: '95%', margin: '20px 0', border: 'none', boxShadow: '0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)', padding: '20px' }}>
                <caption style={{ fontWeight: 'bold', fontSize: '20px', width: '300px' }}>{props.heading}</caption>


                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>

                    <div style={{ width: '49%', display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '20px' }}>
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
                        <div style={{ backgroundColor: 'rgb(0,0,0,0.1)', padding: '20px', borderRadius: '5px' }}>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div style={{ width: '48%', display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '20px' }}>
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
                        <div style={{ backgroundColor: 'rgb(0,0,0,0.1)', padding: '20px', borderRadius: '5px'}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table3;

