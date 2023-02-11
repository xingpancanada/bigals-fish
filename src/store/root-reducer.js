import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { userReducer } from "./user/user.reducer";

////152
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer, ////156
  cart: cartReducer,
});
