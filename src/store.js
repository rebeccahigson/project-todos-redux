import { configureStore, combineReducers } from "@reduxjs/toolkit"
import taskReducer from "./reducers/taskSlice";

const reducer = combineReducers({
  tasks: taskReducer,
});

export const store = configureStore({
  reducer: reducer
});