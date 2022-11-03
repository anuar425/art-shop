import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "@/redux/slice/appSlice";

const rootReducer = combineReducers({
  app: appSlice,
});

export default rootReducer;
