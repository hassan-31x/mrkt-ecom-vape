"use client";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./slice/cartSlice";

const reducers = combineReducers({
  cart: persistReducer(
    {
      key: "root",
      storage,
    },
    cartReducer
  ),
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);