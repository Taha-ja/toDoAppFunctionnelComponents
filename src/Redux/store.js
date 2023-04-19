import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { REDUCER_TODO} from "./reducer.js";

const middleware = [thunk];

const store = configureStore({
  reducer: {
    todosList: REDUCER_TODO,
  },
  middleware: middleware,
});

export default store;
