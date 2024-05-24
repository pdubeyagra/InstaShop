import React, { createContext } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < all_product.length; index++) {
//     cart[all_product[index].id] = 0;
//   }
//   return cart;
// };

const ShopContextProvider = (props) => {
  // const [cartItems, setCartItems] = useState(getDefaultCart());

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => {
  //     const newCount = prev[itemId] - 1;
  //     return { ...prev, [itemId]: newCount >= 0 ? newCount : 0 };
  //   });
  // };

  const contextValue = { all_product}; //, cartItems, addToCart, removeFromCart 
  // console.log("Cart Items:", cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
