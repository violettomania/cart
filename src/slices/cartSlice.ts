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
      state.amount = action.payload;
    },
    addToCart: (state) => {
      state.amount++;
    },
    removeFromCart: (state) => {
      state.amount--;
    },
  },
});

export const { initializeCart, addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.amount;

export default cartSlice.reducer;
