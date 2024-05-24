import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignUp from "./Pages/LoginSignUp";
import Cart from "./Pages/Cart";
import mens_banner from "./Assets/banner_mens.png";
import womens_banner from "./Assets/banner_women.png";
import kids_banner from "./Assets/banner_kids.png";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/shopcategory/mens"
            element={<ShopCategory banner={mens_banner} category="men" />}
          />
          <Route
            path="/shopcategory/womens"
            element={<ShopCategory banner={womens_banner} category="women" />}
          />
          <Route
            path="/shopcategory/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
