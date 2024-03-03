import { createSlice } from "@reduxjs/toolkit";


const addProductSlice = createSlice({
    name : "add",
    initialState : [], // this initial data should come from backend
    reducers : {
        addProduct : (state,action) => {
            return state.saveProduct(action.payload);
        }
    }
});

export const addProductActions = addProductSlice.actions;


export default addProductSlice;