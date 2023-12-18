import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import AllUsers from "./pages/AllUsers/AllUsers";
import Advertising from "./pages/Advertising/Advertising";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/Advertising" element={<Advertising />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
