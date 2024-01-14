import { add, minus, addAcync } from "../store/modules/counter";
import CounterResult from "./CounterResult";
import CounterButton from "./CounterButton";

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton step={2} calcType="+" actionCreater={add} />
      <CounterButton step={2} calcType="-" actionCreater={minus} />
      <CounterButton step={10} calcType="非同期+" actionCreater={addAcync} />
      <CounterButton step={10} calcType="-" actionCreater={minus} />
    </>
  );
};
export default Counter;
