// import { createStore, combineReducers } from "redux";
import reducer from "./modules/counter"
import { configureStore } from "@reduxjs/toolkit";

// const reducers = combineReducers({
//   counter: reducer,
// });

// export default createStore(reducers);
export default configureStore({
  reducer: {
    counter: reducer,
  }
});
