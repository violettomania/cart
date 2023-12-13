import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface CartState {
  amount: number;
}

const initialState: CartState = {
  amount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      state.amount = action.payload > 0 ? action.payload : 0;
    },
    addToCart: (state) => {
      state.amount++;
    },
    removeFromCart: (state) => {
      state.amount--;
    },
    clearCart: (state) => {
      state.amount = 0;
    },
  },
});

export const { initializeCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.amount;

export default cartSlice.reducer;
