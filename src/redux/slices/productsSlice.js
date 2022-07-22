const { createSlice } = require("@reduxjs/toolkit");

const productsSlice = createSlice({
  name: "products",
  initialState: { isLoading: true, products: [], filter: false },
  reducers: {
    loadedProducts: {
      reducer(state, action) {
        state.products = action.payload.products;
        state.isLoading = false;
        state.filter = action.payload.filter;
      },
      prepare(products, filter) {
        return {
          payload: {
            products,
            filter,
          },
        };
      },
    },
  },
});

export const { loadedProducts } = productsSlice.actions;
export default productsSlice.reducer;
