import { combineReducers } from "redux";
// slices
import productReducer from "./slices/product";
import userReducer from "./slices/user";
// ----------------------------------------------------------------------

/*
const rootPersistConfig = {
     key: 'root',
     storage,
     keyPrefix: 'redux-',
     whitelist: []
};
*/
import profileSlice from "./slices/profileSlice";

import cartSlice from "./slices/cartSlice";

import orderSlice from "./slices/orderSlice";
import productsSlice from "./slices/productsSlice";
const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  profileUser: profileSlice,
  cartUser: cartSlice,
  orderUser: orderSlice,
  products: productsSlice,
});

export { rootReducer };
