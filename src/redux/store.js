import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import darkModeReducer from "./darkModeSlice";
import productReducer from "./productSlice";
const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    darkMode: darkModeReducer,
    products: productReducer,

  },
});

export default store;

