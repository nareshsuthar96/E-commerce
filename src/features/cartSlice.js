import { createSlice } from '@reduxjs/toolkit'
import productData from "../productData"

const initialState = {
    cart : [],
    iteams : productData,
    totalQuantity : 0,
    totalPrice : 0

}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddToCart : (state,action)=>{
            let find=state.cart.findIndex((iteam)=>iteam.id===action.payload.id);
            if(find>=0){
                state.cart[find].quantity+=1;
            }else{
                state.cart.push(action.payload)
            }
            
        },

        getCartTotal: (state)=>{
            let {totalQuantity,totalPrice} = state.cart.reduce(
                (cartTotal, cartIteam) => {
                    console.log("carttotal" , cartTotal);
                    console.log("cartiteam" , cartIteam);
                    const {price , quantity} = cartIteam;
                    console.log(price ,quantity);
                    const iteamTotal = price* quantity;
                    cartTotal.totalPrice += iteamTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal
                },
                {
                    totalQuantity : 0,
                    totalPrice : 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        removeIteam : (state , action) =>{
            state.cart = state.cart.filter((iteam)=> iteam.id !== action.payload)
        },

        increaseIteamQuantity : (state, action)=>{
            state.cart =  state.cart.map((iteam)=>{
                if (iteam.id === action.payload){
                    return { ...iteam, quantity: iteam.quantity +1};
                }
                return iteam;
            });
        },

        decreaseIteamQuantity : (state, action)=>{
            state.cart =  state.cart.map((iteam)=>{
                if (iteam.id === action.payload){
                    return { ...iteam, quantity: iteam.quantity -1};
                }
                return iteam;
            });
        },
    }
})

export const { AddToCart,  getCartTotal,removeIteam,increaseIteamQuantity ,decreaseIteamQuantity} = cartSlice.actions

export default cartSlice.reducer