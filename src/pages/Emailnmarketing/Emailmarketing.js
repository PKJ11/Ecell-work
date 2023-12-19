import React, { useState } from 'react';
import "./Emailmarketing.css"
import "../SEO/seo.css";
import { emailMaarketing } from '../../Data/Data';
import { Button } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import Calender from "../../components/Calender.jsx";

const Emailmarketing = () => {
 
    const [selected, setSelected] = useState(0);

    return (
       <div className='AppGlass'>
        <div> <Sidebar/></div>
        <div>
        <MainDash heading="EMail Marketing" />
        <div className='header'>
            <h2>Prototype</h2>
        </div>
        <div className='displaycard'>
            {
                emailMaarketing.slice(0,5).map((item,index) => {
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
                <div className='display'>
                    <div className="seocards" style={{ height: "40%" }}>
                        <div className="cards"></div>
                        <div className="cards"></div>
                        <div className="cards"></div>
                    </div>
                    <div className="seocards" style={{ height: "40%" }}>
                        <div className="cards"></div>
                        <div className="cards"></div>
                        <div className="cards"></div>
                    </div>
                </div>
            )
        }
        {
            selected === 1 && (
               <div className='display1'>
                <h2>Mail Dump</h2>
               <p>A Brief Description</p>  
               <div className='box'>
               <div className="displaycards activate">
               <span>Configure</span>
               </div> 
               <div className="displaycards activate">
               <span>Amount</span>
               </div>
                </div>
               </div>
            )
        }

      {
        selected === 2 && (
           <div>
            <div className='display2'>
                <h2>Data Extraction</h2>
               <p></p>  
               <div className='box' style={{padding:"0 0",width:"90%"}}>
               <div className="displaycards activate">
               <span>Data from Web-based source(external)</span>
               </div> 
               <div className="displaycards activate">
               <span>Data from Existing Database</span>
               </div>
                </div>
               </div>
            </div>
         )
      }

      {
        selected === 3 && (
            <div>
             <div className='display2' style={{width:"46%"}}>
                 <h2>Defining CTA of Campaign</h2>
                <p></p>  
                <div className='box' style={{padding:"0 0",width:"90%"}}>
                <div className="displaycards activate">
                <span>Custom</span>
                </div> 
                <div className="displaycards activate">
                <span>Custom</span>
                </div>
                 </div>
                 <div className='box' style={{padding:"0 0",width:"90%"}}>
                <div className="displaycards activate">
                <span>Custom</span>
                </div> 
                <div className="displaycards activate">
                <span>Custom</span>
                </div>
                 </div>
                </div>

                <div className='display2' style={{width:"56%"}}>
                 <h2>Personalization</h2>
                <p></p>  
                <div className='box' style={{padding:"0 0",width:"90%"}}>
                <div className="displaycards activate">
                <span>Name</span>
                </div> 
                <div className="displaycards activate">
                <span>Cart Details</span>
                </div>
                <div className="displaycards activate">
                <span>Custom</span>
                </div>
                 </div>
                <div className='box' style={{padding:"0 0",width:"90%"}}>
                <div className="displaycards activate">
                <span>A/B Test</span>
                </div> 
                <div className="displaycards activate">
                <span>Check</span>
                </div>
                 </div>
                </div>
             </div>
          )
      }

      {
        selected === 4 && (
            <div className='display2' style={{height:"60%"}}>
            <h2>Report</h2>
           <p></p>  
           <div className='box' style={{padding:"0 0",width:"90%"}}>
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
            <div className='reportbox'>
             <div className='reportcard'></div>
             <div className='reportcard'></div>
            </div>
            <div className='reportbox'>
             <div className='reportcard'></div>
             <div className='reportcard'></div>
            </div>
           </div>

        )
      }

    </div>
    <Calender/>
       </div>
    );
}

export default Emailmarketing;


// <AllProducts heading="Database" subheading="A brief description"/>
