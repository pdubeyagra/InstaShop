import React from "react";
import "./Breadcrums.scss";
import arrow_icon from "../../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const {product} = props;
  return (
    <div className="Breadcrums">
      Home <img src={arrow_icon} alt="" />
      Shop <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrums;
