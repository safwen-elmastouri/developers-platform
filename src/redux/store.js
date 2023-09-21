import { configureStore } from "@reduxjs/toolkit";
//Importing the reducer from countSlice
import counterReducer from "./countslice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
