import { createSlice } from "@reduxjs/toolkit";
import { CollectionItemResponse } from "api/collections/collections.type";

type ISelectedCartItem = CollectionItemResponse;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as ISelectedCartItem[],
    totalAmount: 0,
    itemCount: 0,
    show: false,
  },

  reducers: {
    getCartTotal: (state) => {
      const { totalAmount, itemCount } = state.items.reduce(
        (cartTotal: any, cartItem: any) => {
          const { price } = cartItem;

          cartTotal.totalAmount += price;
          cartTotal.itemCount += 1;

          return cartTotal;
        },
        {
          totalAmount: 0,
          itemCount: 0,
        }
      );
      state.totalAmount = totalAmount.toFixed(2);
      state.itemCount = itemCount;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item: CollectionItemResponse) => item.tokenOrder !== action.payload);
    },
    removeAll: (state) => {
      state.items = [];
    },
    add: (state, action) => {
      state.items.push(action.payload);
    },
    getCartItems: (state) => {
      state.items = [];
    },
    toggleCartModal: (state) => {
      state.show = !state.show;
    },
  },
});

export const { getCartTotal, remove, getCartItems, add, removeAll, toggleCartModal } = cartSlice.actions;

export default cartSlice.reducer;