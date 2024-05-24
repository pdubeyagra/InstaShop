// reducers/cartReducer.js

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../CartActions/cartActions";

const initialState = {
  items: [],
};
// const persistedState = localStorage.getItem('cartState');
// const initialState = persistedState ? JSON.parse(persistedState) : { items: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

      case UPDATE_CART_QUANTITY:
        const { itemId, quantity } = action.payload;
        const updatedItems = state.items.map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(quantity, 1) } // Ensures quantity doesn't go negative
            : item
        );
        return {
          ...state,
          items: updatedItems,
        };
      

    default:
      return state;
  }
};

export default cartReducer;
