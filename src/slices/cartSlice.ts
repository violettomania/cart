import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        const updatedItem = { ...item, amount: item.amount + 1 };
        state.items = state.items.map((item) =>
          item.id !== updatedItem.id ? item : updatedItem
        );
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (item.amount > 1) {
          const updatedItem = { ...item, amount: item.amount - 1 };
          state.items = state.items.map((item) =>
            item.id !== updatedItem.id ? item : updatedItem
          );
        } else {
          // remove last item
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { initializeCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
