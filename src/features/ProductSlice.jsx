import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await axios.get("http://localhost:4000/products");
    return res.data;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});
const ProductSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
  },
});

export const productSelector = productEntity.getSelectors(
  (state) => state.product
);
export default ProductSlice.reducer;
