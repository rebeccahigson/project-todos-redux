import { configureStore, combineReducers } from "@reduxjs/toolkit"
//import tasksReducer from "./reducers/taskSlice";
import tasksReducer from "./reducers/taskSlice";

const reducer = combineReducers({
 // tasks: tasksReducer,
  tasks: tasksReducer,
});

export const store = configureStore({
  reducer: reducer
});