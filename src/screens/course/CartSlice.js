import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action){
            state.push(action.payload)
        },
        removeCart(state, action){
            return state.filter((item, index) => index !== action.payload)
        }
    }
});

export const { 
    addCartItem,
    removeCart
}  = CartSlice.actions;

export default CartSlice.reducer;
