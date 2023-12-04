import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
};

const Cart = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartAction = Cart.actions;

export default Cart.reducer;
