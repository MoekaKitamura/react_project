import React from "react";
import { useCalcContext } from "../context/CalcProvider";

const Result = () => {
  const state = useCalcContext();

  return <h3>結果：{state.result}</h3>;
};

export default Result;
