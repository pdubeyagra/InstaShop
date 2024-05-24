import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <>
      <div className="Items">
       <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)} alt="" /></Link> 
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-prices-new">Rs {props.new_price}</div>
          <div className="item-prices-old">Rs {props.old_price}</div>
        </div>
      </div>
    </>
  );
};

export default Item;
