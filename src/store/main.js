import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./HomeSlice";
import addProductSlice from "./AddingProduct";

const productStore = configureStore({
  reducer: {
    product: productSlice.reducer,
    add: addProductSlice.reducer,
  },
});

export default productStore;
