import React from "react";
import "./Cartitems.scss";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../CartActions/cartActions";

const Cartitems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateCartQuantity(itemId, quantity));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.new_price * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const shippingFee = 0; // Assuming shipping fee is fixed at 0
  const total = subtotal + shippingFee;

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
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cartitems-format cartitems-main">
            {item ? (
              <>
                <img src={item.image} alt={item.name} className="cart_image" />
                <p>{item.name}</p>
                <p>RS {item.new_price}</p>
                <div className="cartitems-quantity">
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p>RS {item.new_price * item.quantity}</p>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <img
                    src={remove_icon}
                    alt="Remove icon"
                    className="cart-remove-icon"
                  />
                </button>
              </>
            ) : (
              <p>Item not found</p>
            )}
          </div>
        ))
      ) : (
        <div className="empty-cart-message">
          <h1>Your cart is currently empty.</h1>
        </div>
      )}
      <hr />
      <div className="cartitems-last">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-checkout">
              <p>SubTotal</p>
              <p>Rs{subtotal}</p>
            </div>
            <hr />
            <div className="cartitems-total-checkout">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-checkout">
              <h3>Total</h3>
              <h3>Rs{total}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>Enter Promo Code Here</p>
          <div className="promobox">
            <input type="text" placeholder="Promo code" name="" id="" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
