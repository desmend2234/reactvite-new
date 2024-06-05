import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [JSON.parse(localStorage.getItem('cart'))] || [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(action.payload))
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(
                (product) => product.id === action.payload
            )
            item.quantity++
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (product) => product.id === action.payload
            )
            item.quantity--
            if (item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action)
        },
        clearCart(state, action) {
            state.cart = []
        },
    },
})

export const {
    addItem,
    deleteItem,
    decreaseItemQuantity,
    increaseItemQuantity,
    clearCart,
} = cartSlice.actions
export default cartSlice.reducer

export const getCart = (state) => state.cart.cart

export const getCartTotalPrice = (state) => {
    return state.cart.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )
}
export const getCartTotalQuantity = (state) => {
    return state?.cart?.cart?.reduce((sum, item) => sum + item?.quantity, 0)
}
export const getCurrentQuantityById = (id) => (state) =>
    state?.cart?.cart?.find((item) => item?.id === id)?.quantity ?? 0
