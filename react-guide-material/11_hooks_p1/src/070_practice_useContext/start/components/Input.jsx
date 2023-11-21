import React from "react";
import { useCalcContext, useCalcDispatchContext } from "../context/CalcProvider";

const Input = ({ name }) => {
  const state = useCalcContext();
  const dispatch = useCalcDispatchContext();

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };

  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        value={state.name}
        onChange={numChangeHandler}
      />
    </div>
  );
};

export default Input;
