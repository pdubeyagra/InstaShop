import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
    const cartItems = useSelector((state) => state.cart.items);
  
  return (
    <>
      <div className="Navbar">
        <div className="nav-logo">
          <Link to="/" style={{textDecoration: 'none'}}>
          <img src={logo} alt="" />
          <span>InstaShop</span>
          </Link>
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
          <Link to="/login">
          <button>Login</button>
          </Link>
          <Link to="/cart">
          <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{cartItems.length}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
