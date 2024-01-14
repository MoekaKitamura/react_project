import { createSlice } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";

const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    },
  }
});

const { add, minus } = counter.actions;

const addAcync = (payload) => {
  return async (dispatch, _getState) => {
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};

export { add, minus, addAcync };
export default counter.reducer;
