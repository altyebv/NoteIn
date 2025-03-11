// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import UiSlice from './UiSlice';
import NoteSlice from './NoteSlice';
import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    ui: UiSlice,
    note: NoteSlice,
    cart: CartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
