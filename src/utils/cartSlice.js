import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // if item already exists → increase quantity
        existingItem.quantity += 1;
      } else {
        // else add new item with quantity = 1
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;

      const existingItem = state.items.find((i) => i.id === id);

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        // remove item completely
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        // decrease quantity
        existingItem.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
