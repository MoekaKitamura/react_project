import { useState } from "react"

const Example = () => {
  const [val, setVal] = useState();

  const onChangeEvent = (e) => {
    // const setFn = valArray[1]
    setVal(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={onChangeEvent}/> = {val}
    </>
  );
};

export default Example;
