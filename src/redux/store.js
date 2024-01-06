import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});


//https://www.youtube.com/watch?v=fMiFnbufAP4&t=1273s
//https://stackoverflow.com/questions/35443167/dispatch-is-not-a-function-when-argument-to-maptodispatchtoprops-in-redux