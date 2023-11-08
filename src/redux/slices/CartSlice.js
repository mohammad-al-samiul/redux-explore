import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeToCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeToCart, increment, decrement } =
  CartSlice.actions;
export default CartSlice.reducer;
