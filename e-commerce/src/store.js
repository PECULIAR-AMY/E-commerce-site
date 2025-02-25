import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice"; // Import both reducers

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer, // Both reducers in one store
  },
});

export default store;
