import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Holds items in the cart
  totalQuantity: 0, // Total number of items
  totalPrice: 0, // Total cart price
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    removeFromCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          // If quantity is 1, remove the item completely
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Corrected selectors
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export const selectCartCount = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export default cartSlice.reducer;
