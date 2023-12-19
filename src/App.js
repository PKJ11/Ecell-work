import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import AllUsers from "./pages/AllUsers/AllUsers";
import Advertising from "./pages/Advertising/Advertising";
import ContentMarketing from "./pages/ContentMarketing/ContentMarketing";
import EmployementNews from "./pages/EmploymentNews/EmployementNews";
import SEO from "./pages/SEO/seo";
import Emailmarketing from "./pages/Emailnmarketing/Emailmarketing";
import Budget from "./pages/Budget/Budget";
import Advertisement from "./pages/Advertisement/Advertisement";
import EcomMag from "./pages/EcomMag/EcomMag";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          {/* <Route path="/Advertising" element={<Advertising />} /> */}
          <Route path="/Advertising" element={<Advertisement />} />
          <Route path="/Ecom" element={<EcomMag />} />
          <Route path="/seoprototype" element={<SEO />} />
          <Route path="/ContentMarketing" element={<ContentMarketing />} />
          <Route path="/emailmarketing" element={<Emailmarketing />} />
          <Route path="/EmployementNews" element={<EmployementNews />} />
          <Route path="/Budget" element={<Budget/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
