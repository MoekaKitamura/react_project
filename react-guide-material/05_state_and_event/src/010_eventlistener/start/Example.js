const Example = () => {
  const clickHandler = () => {
    alert("ああ")
  }
  const clickHandler2 = () => {
    alert("ああ２")
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
