import { configureStore } from "@reduxjs/toolkit";
import payReducer from './paySlice';

export const store = configureStore({
    reducer: {
      pay: payReducer,
    },
    middeleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTool: true,
  });

