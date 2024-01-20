"use client";

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  shippingCost: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (idx === -1) {
        state.items.push({
          ...action.payload,
          qty: 1,
          discountApplied: false,
          sum: action.payload.sale_price ?? action.payload.price,
        });
      } else {
        state.items[idx].qty += 1;
        state.items[idx].sum +=
          action.payload.sale_price ?? action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state.items = [];
      state.shippingCost = 0;
    },
    updateCart: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[idx].qty = action.payload.qty;
      state.items[idx].sum =
        action.payload.qty * state.items[idx]?.sale_price ||
        state.items[idx]?.price;
    },
    addShippingCost: (state, action) => {
      state.shippingCost = action.payload;
    },
    applyDiscount: (state, action) => {
      state.items?.forEach((item) => {
        if (
          action.payload?.products?.includes(item.id) &&
          !item?.discountApplied
        ) {
          const discountAmount =
            action.payload?.amount ||
            (item?.sale_price || item.price) *
              (action.payload?.percentage / 100);
          item.discountApplied = true;
          item.discountAmount = discountAmount?.toFixed(2);
          item.sale_price -= discountAmount?.toFixed(2);
          item.sum -= discountAmount?.toFixed(2) * item.qty;
        }
      });

      toast.success("Discount applied!");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  emptyCart,
  updateCart,
  addShippingCost,
  applyDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
