import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShopContextProvider from "./Context/ShopContext";
import { Provider } from "react-redux";
import store from "../src/CartStore/store.js";
import CartContextProvider from "./Context/cartContext.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
  <ShopContextProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ShopContextProvider>
  </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
