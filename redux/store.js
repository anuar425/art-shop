import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/redux/slice/index";

export const store = configureStore({
  reducer: rootReducer,
});
