"use client";

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  shippingCost: 0
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
          sum: action.payload.sale_price ?? action.payload.price,
        });
      } else {
        state.items[idx].qty += 1;
        state.items[idx].sum += action.payload.sale_price ?? action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state.items = [];
      state.shippingCost = 0
    },
    updateCart: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.cartId === action.payload.cartId
      );
      state.items[idx].warrantyId = action.payload.warrantyId;
      state.items[idx].warrantyPrice = action.payload.warrantyPrice;
    },
    addShippingCost: (state, action) => {
      state.shippingCost = action.payload;
    },
    applyDiscount: (state, action) => {
      const products = state.items?.filter(item => !action.payload?.products?.includes(item.productId) && !item?.discountApplied);
      products?.forEach(item => {
        const discountAmount = action.payload?.amount || item.sale_price * (action.payload?.percentage / 100)
        item.discountApplied = true;
        item.discountAmount = discountAmount?.toFixed(2)
        item.sale_price -= discountAmount?.toFixed(2)
        item.sum -= discountAmount?.toFixed(2)
      })

      toast.success('Discount applied!')
    }
  },
});

export const { addToCart, removeFromCart, emptyCart, updateCart, addShippingCost, applyDiscount } =
  cartSlice.actions;

export default cartSlice.reducer;