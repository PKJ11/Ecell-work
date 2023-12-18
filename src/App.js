import { useState } from 'react';
import './App.css'
import MainDash from './components/Screens/MainDash/Screen9';

import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen9 from './components/Screens/MainDash/Screen9.jsx';
import SEO from './components/Screens/Seoscreen/seo.js';
import Emailmarketing from './components/Emailmarketig/emailmarketing.js';

function App() {

 const [heading,setheading] = useState("Home");



  return (
    <BrowserRouter>
    <div className="App">
      <div className="AppGlass">
        <Sidebar heading={heading} setheading={setheading}/>
        <Routes>
        <Route path="/" element={<MainDash/>} />
        <Route path="/Home" element={<MainDash/>} />
        <Route path="/SEO Prototype" element={<SEO/>} />
        <Route path="/E-Mail Marketing" element={<Emailmarketing/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
