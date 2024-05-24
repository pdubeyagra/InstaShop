// import React from "react";
// import "./Cartitems.scss";
// import remove_icon from "../../Assets/cart_cross_icon.png";
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, updateCartQuantity } from '../../CartActions/cartActions';

// const Cartitems = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);
 
//   console.log(cartItems)
//   // const handleAddToCart = (item) => {
//   //   dispatch(addToCart(item));
//   // };

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   const handleUpdateQuantity = (itemId, quantity) => {
//     dispatch(updateCartQuantity(itemId, quantity));
//   };
//   if (cartItems.length === 0) {
//     return <div>Your cart is empty.</div>;
//   }

//   return (
//     <div className="Cartitems">
//       <div className="cartitems-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {cartItems.map((item) => (
//         <div key={item.id} className="cartitems-format">
//           <img src={item.image} alt={item.name} />
//           <p>{item.name}</p>
//           <p>RS {item.new_price}</p>
//           <div className="cartitems-quantity">
//             <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
//             <span>{item.quantity}</span>
//             <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
//           </div>
//           <p>RS {item.new_price * item.quantity}</p>
//           <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
//             <img src={remove_icon} alt="Remove icon" />
//           </button>
//         </div>
//       ))}
//       <hr />
//     </div>
//   );
// };

// export default Cartitems;


// components/Cartitems.js
import React from "react";
import "./Cartitems.scss";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { useCart } from "../../Context/cartContext";

const Cartitems = () => {
  const { state, removeFromCart, updateCartQuantity } = useCart();
  const { products } = state;

  if (products.length === 0) {
    return <div>Your cart is empty.</div>;
  }

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
      {products.map((product) => (
        <div key={product.id} className="cartitems-format">
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>RS {product.new_price}</p>
          <div className="cartitems-quantity">
            <button onClick={() => updateCartQuantity(product.id, product.quantity - 1)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => updateCartQuantity(product.id, product.quantity + 1)}>+</button>
          </div>
          <p>RS {product.new_price * product.quantity}</p>
          <button className="remove-button" onClick={() => removeFromCart(product.id)}>
            <img src={remove_icon} alt="Remove icon" />
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default Cartitems;
