import CounterResult from "./CounterResult";
import CounterButton from "./CounterButton";

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton step={2} calcType="+" />
      <CounterButton step={3} calcType="-" />
      <CounterButton step={56} calcType="+" />
      <CounterButton step={67} calcType="-" />
      <CounterButton step={25} calcType="+" />
    </>
  );
};
export default Counter;
