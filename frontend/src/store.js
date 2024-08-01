import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apislice";
import cartSliceReducer from "./slices/cartslice";
import authSliceReducer from "./slices/authslice";

const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default Store;
