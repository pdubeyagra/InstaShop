import React, { useContext } from "react";
import "./pages.scss";
import { ShopContext } from "../Context/ShopContext.js";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Components/Item/Item.jsx";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="ShopCategory">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <div className="shopcategory-index">
          <span className="onetotwelve">Showing 1-12</span> <span className="out_of">out of 36 Products</span>
        </div>
        <div className="shopcategort-sort">
          <span>Sort by</span>
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore"><p>Explore More</p></div>
    </div>
  );
};

export default ShopCategory;
