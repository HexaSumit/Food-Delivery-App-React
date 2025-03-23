import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './CartSlice.js'

export const store = configureStore({
    reducer: {
        cart:cartSlice
    },
})