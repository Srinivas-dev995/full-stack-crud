import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [], // this initial data should come from backend
  reducers: {

    editproduct: (state, action) => {
      return state.Product.editproduct(action.payload);
    },
    deleteProduct: (state, action) => {
      state.deleteProduct(action.payload);
    },
    getAllProducts :(state,action)=>{
        return state.Product.getAllProduct();
    }
  },
});

export const productActions = productSlice.actions;

export default productSlice;
