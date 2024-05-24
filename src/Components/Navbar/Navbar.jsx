import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  return (
    <>
      <div className="Navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <span>InstaShop</span>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("Shop");
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' ,color: '#626262' }}>
            Shop </Link> {menu === "Shop" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("Mens");
            }}
          >
            <Link to="/shopcategory/mens" style={{ textDecoration: 'none',color: '#626262' }}>
            Mens</Link> {menu === "Mens" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("Womens");
            }}
          >
            <Link to="/shopcategory/womens" style={{ textDecoration: 'none',color: '#626262' }}>
            Womens</Link> {menu === "Womens" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link to="/shopcategory/kids" style={{ textDecoration: 'none',color: '#626262' }}>
            Kids </Link> {menu === "Kids" && <hr />}
          </li>
        </ul>
        <div className="nav-right">
          <button>Login</button>
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
