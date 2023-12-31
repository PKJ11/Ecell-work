import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainDash from '../../components/MainDash/MainDash'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Advertising = () => {
  return (
    <div className="AppGlass ">
        <Sidebar/>
        {/* <MainDash heading="Advertising" /> */}
        <div>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
    
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </div>
      </div>
  )
}

export default Advertising
