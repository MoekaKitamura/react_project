import { useReducer } from "react";

const CALC_OPTIONS = ["--", "add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change":
      return { ...state, [payload.name]: payload.value };
    case "add":
      return { ...state, result: state.a + state.b, type: type };
    case "minus":
      return { ...state, result: state.a - state.b, type: type };
    case "divide":
      return { ...state, result: state.a / state.b, type: type };
    case "multiply":
      return { ...state, result: state.a * state.b, type: type };
    default:
      throw new Error("不明なアクションです");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  console.log(state);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
