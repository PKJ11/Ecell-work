import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import MainDash from "../../components/MainDash/MainDash";
import Calender from "../../components/Calender";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=XGnWOSVXmZ1l68tRIi3ubHAPHnGU7L1GRubBdqk2mAI27U-s7KWR9lQj405v316lc5mQniJGFmh-QfblY3CyC_EX9Fb6m-SVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGTUXEtKGsSXhspN_FOIrz3hLqtkvwgXDsm9MuQNiSizSdGjHTjqBMutZWWKOkHetiqNCZ9PnUcH0671EpeurO7BcZK9AEVKvw&lib=MO_OR6WXEbnBEyTPFcpF4WXDHy3CBpolr');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
              <MDBTableHead>
                <tr>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>#</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Name</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Product</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Price</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>External Price</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Description</th>
                  <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Category</th>
                  {/* <th scope='col' style={{ backgroundColor: 'rgba(35, 180, 255)', color: '#fff' }}>Image</th> */}
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {products.slice(0, 7).map((product, index)=> (
                  <tr key={index} style={{ borderBottom: 'none' }}>
                    <th scope='row' style={{ borderBottom: 'none' }}>{index + 1}</th>
                    <td style={{ borderBottom: 'none' }}>{product.Name}</td>
                    <td style={{ borderBottom: 'none' }}>{product.product}</td>
                    <td style={{ borderBottom: 'none' }}>{product.price}</td>
                    <td style={{ borderBottom: 'none' }}>{product.External_price}</td>
                    <td style={{ borderBottom: 'none',fontSize: '9px' }}>{product.Description}</td>
                    <td style={{ borderBottom: 'none' }}>{product.Category}</td>
                    {/* <td style={{ borderBottom: 'none' }}>
                      <img src={product.Images} alt={product.Name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    </td> */}
                  </tr>
                ))}
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




