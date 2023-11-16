import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  const o = {
    color: "red",
    num: 123,
    fn: hello,
    bool: true,
    obj: { name: 'moeka', age: '18' }
  }
  return (
    <>
      {/* <Child color="red"/>
      <Child color="blue"/>
      <Child /> */}
      <Child {...o} />
    </>
  )
}
export default Example;
