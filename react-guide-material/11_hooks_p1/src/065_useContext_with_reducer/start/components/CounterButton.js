import { useCounter } from "../context/CounterContext";

const CounterButton = ({ calcType, step }) => {
  const [, dispatch] = useCounter();

  const onClickHandler = () => {
    dispatch({ type: calcType, step });
  };

  return (
    <button onClick={onClickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
