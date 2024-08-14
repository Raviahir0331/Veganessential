import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name : 'cart',
    initialState:{
        currentState:[],
    },
    reducers:{
        setCartItems:(state,action)=>{
            state.currentState = action.payload;
        },
        clearCartItems: (state) => {
            state.currentState = [];
          }
    }
})
export const { setCartItems,clearCartItems } = productSlice.actions
export default productSlice.reducer