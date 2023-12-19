import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import AllUsers from "./pages/AllUsers/AllUsers";
import Advertising from "./pages/Advertising/Advertising";
import ContentMarketing from "./pages/ContentMarketing/ContentMarketing";
import EmployementNews from "./pages/EmploymentNews/EmployementNews";
import Budget from "./pages/Budget/Budget";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/Advertising" element={<Advertising />} />
          <Route path="/ContentMarketing" element={<ContentMarketing />} />
          <Route path="/EmployementNews" element={<EmployementNews />} />
          <Route path="/Budget" element={<Budget/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
