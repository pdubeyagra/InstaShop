import React from "react";
import "./Productdisplay.scss";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { useDispatch } from "react-redux";
import { addToCart } from '../../CartActions/cartActions';

const Productdisplay = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  if (!product) {
    return null; // Add a check to ensure product is defined
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the action properly
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 ? 1 : 0;
    const emptyStars = totalStars - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={i} src={star_icon} alt="Star" />);
    }

    if (halfStars) {
      stars.push(<img key="half" src={star_icon} alt="Half Star" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={i + fullStars + halfStars} src={star_dull_icon} alt="Empty Star" />);
    }

    return stars;
  };

  console.log('Button clicked, adding to cart:', product.id);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={`${product.name} thumbnail 1`} />
          <img src={product.image} alt={`${product.name} thumbnail 2`} />
          <img src={product.image} alt={`${product.name} thumbnail 3`} />
          <img src={product.image} alt={`${product.name} thumbnail 4`} />
        </div>
      </div>
      <div className="productdisplay-img">
        <img
          className="productdisplay-main-img"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {renderStars(product.rating)}
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-oldprice">RS {product.old_price}</div>
          <div className="productdisplay-newprice">RS {product.new_price}</div>
        </div>
        <div className="productdisplay-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="productdisplay-size">
          <h1>Select Size</h1>
          <div className="productdisplay-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}> Add to Cart</button>
        <div className="productdisplay-category">
          <span>Category :</span> Women, T-shirt, Crop Top
        </div>
        <div className="productdisplay-tags">
          <span>Tags :</span> Modern, Latest
        </div>
      </div>
    </div>
  );
};

export default Productdisplay;
