<<<<<<< HEAD
import { useState } from 'react';
import './App.css'
import MainDash from './components/Screens/MainDash/Screen9';

import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen9 from './components/Screens/MainDash/Screen9.jsx';

=======
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import AllUsers from "./pages/AllUsers/AllUsers";
import Advertising from "./pages/Advertising/Advertising";
import ContentMarketing from "./pages/ContentMarketing/ContentMarketing";
import EmployementNews from "./pages/EmploymentNews/EmployementNews";
>>>>>>> c8738f8a751eda05317e389ca4bf1f8a9c76fee2
function App() {

 const [heading,setheading] = useState("Home");

  return (
    <BrowserRouter>
    <div className="App">
      <div className="AppGlass">
        <Sidebar heading={heading} setheading={setheading}/>
        <Routes>
<<<<<<< HEAD
        <Route path="/" element={<MainDash/>} />
        <Route path="/1" element={<MainDash/>} />
        <Route path="/4" element={<Screen9/>} />
=======
          <Route index element={<Home />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/Advertising" element={<Advertising />} />
          <Route path="/ContentMarketing" element={<ContentMarketing />} />
          <Route path="/EmployementNews" element={<EmployementNews />} />
>>>>>>> c8738f8a751eda05317e389ca4bf1f8a9c76fee2
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
