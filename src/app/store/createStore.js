import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app";

export function createStore() {
  return configureStore({
    reducer: appReducer,
  });
}
