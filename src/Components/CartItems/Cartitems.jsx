import React from "react";
import "./Cartitems.scss";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../CartActions/cartActions';

const Cartitems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateCartQuantity(itemId, quantity));
  };

  return (
    <div className="Cartitems">
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems.map((item) => (
        <div key={item.id} className="cartitems-format">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>RS {item.new_price}</p>
          <div className="cartitems-quantity">
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <p>RS {item.new_price * item.quantity}</p>
          <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
            <img src={remove_icon} alt="Remove icon" />
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default Cartitems;


