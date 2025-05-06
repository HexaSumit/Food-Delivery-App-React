import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.qty += 1
            } else {
                state.push(action.payload)
            }
            
        },
        RemoveItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },

        decreaseQuantity: (state, action) => {
            const item = state.find((cartItem) => cartItem.id === action.payload);
            if (item) {
                if (item.qty > 1) {
                    item.qty -= 1;
                } else {
                    return state.filter((cartItem) => cartItem.id !== action.payload);
                }
            }
        },

        increaseQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.find((cartItem) => cartItem.id === itemId);
            if (item) {
              item.qty += 1;
            }
          },
          clearCart: (state) => {
            return [];
          },
    }
})

export const { AddItem, RemoveItem,decreaseQuantity,increaseQuantity,clearCart } = cartSlice.actions
export default cartSlice.reducer
