// store.js

import { legacy_createStore as createStore, combineReducers } from 'redux';
import cartReducer from '../CartReducers/cartReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => {
//   localStorage.setItem('cartState', JSON.stringify(store.getState()));
// });

export default store;
