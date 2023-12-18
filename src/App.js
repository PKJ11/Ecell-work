import { useState } from 'react';
import './App.css'
import MainDash from './components/MainDash/MainDash';

import Sidebar from './components/Sidebar';

function App() {

 const [heading,setheading] = useState("Home");

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar heading={heading} setheading={setheading}/>
        <MainDash heading = {heading} setheading={setheading}/>
      </div>
    </div>
  );
}

export default App;
