import { createSlice } from "@reduxjs/toolkit";
// utils
import { default as axios } from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  products: [],
  product: null,
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },

    // GET PRODUCT
    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },
    //  SORT & FILTER PRODUCTS
    sortByProducts(state, action) {
      state.sortBy = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { sortByProducts } = slice.actions;

// ----------------------------------------------------------------------

export function getProducts() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`product/getProduct`);
      // console.log(response)
      dispatch(slice.actions.getProductsSuccess(response.data.result));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
