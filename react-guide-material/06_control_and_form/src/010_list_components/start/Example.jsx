const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const helloAnimals = animals.map((animal) => <li>HELLO, {animal}</li>);

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animals}
        {helloAnimals}
        {animals.map((animal) => (
          <li>HELLO, {animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
