import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('addToCart called with:', action.payload)
      state.cart.push(action.payload)
    },
    clearCart: (state) => {
      state.cart = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer