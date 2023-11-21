import React from "react";
import { useCalcContext, useCalcDispatchContext } from "../context/CalcProvider";

const Select = () => {
  const state = useCalcContext();
  const dispatch = useCalcDispatchContext();
  const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  return (
    <select value={state.type} name="type" onChange={calculate}>
      {CALC_OPTIONS.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default Select;
