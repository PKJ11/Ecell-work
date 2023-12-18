import { useState } from 'react';
import './App.css'
import MainDash from './components/Screens/MainDash/Screen9';

import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen9 from './components/Screens/MainDash/Screen9.jsx';

function App() {

 const [heading,setheading] = useState("Home");



  return (
    <BrowserRouter>
    <div className="App">
      <div className="AppGlass">
        <Sidebar heading={heading} setheading={setheading}/>
        <Routes>
        <Route path="/" element={<MainDash/>} />
        <Route path="/1" element={<MainDash/>} />
        <Route path="/4" element={<Screen9/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
