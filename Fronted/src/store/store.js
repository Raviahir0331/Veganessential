import { configureStore } from "@reduxjs/toolkit";
import  productReducer from '../reduxSlice/productSlice';
export const store = configureStore({
    reducer:{
        cart : productReducer,
    },
})