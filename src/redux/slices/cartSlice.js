import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cartUser",
  initialState: { data: [], loading: true, notCart: false },
  reducers: {
    loadedCart(state, action) {
      state.data = action.payload;
      state.loading = false;
      if (!state.data.length) {
        state.notCart = true;
      } else {
        state.notCart = false;
      }
    },
    deleteCart(state, action) {
      state.data[0].products = state.data[0].products.filter(
        (x) => x._id !== action.payload
      );
    },
    deleteAll(state) {
      state = { data: [], loading: true, notCart: true };
    },
    changeNoteCart(state, action) {
      state.notCart = action.payload;
    },
  },
});

export const { loadedCart, deleteCart, deleteAll } = CartSlice.actions;
export default CartSlice.reducer;
