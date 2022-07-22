import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "orderUser",
  initialState: { data: [], loading: true, notOrder: false },
  reducers: {
    loadedOrder(state, action) {
      state.data = action.payload;
      state.loading = false;
      if (!state.data.length) {
        state.notOrder = true;
      } else {
        state.notOrder = false;
      }
    },
  },
});

export const { loadedOrder } = orderSlice.actions;
export default orderSlice.reducer;
