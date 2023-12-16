import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface CartState {
  items: Item[];
  isLoading: boolean;
  loadedImageCount: number;
}

const initialState: CartState = {
  items: [],
  isLoading: true,
  loadedImageCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      state.items = action.payload;
    },
    stopItemImageLoading: (state) => {
      state.loadedImageCount += 1;
      if (state.loadedImageCount === state.items.length) {
        state.isLoading = false;
      }
    },
    addToCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount += 1;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.amount > 1) {
        item.amount -= 1;
      } else if (item && item.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  initializeCart,
  stopItemImageLoading,
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
