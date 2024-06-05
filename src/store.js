import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice.js'
import cartReducer from './features/cart/cartSlice.js'
// import productSlice from './features/menu/productSlice.js'

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        // product: productSlice,
    },
})

export default store
