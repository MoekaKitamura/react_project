import { useState } from "react";
import AnimalList from "./conponents/AnimalList";
import AnimalFilter from "./conponents/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");
  const filteredAnimals = animals.filter((animal) => {
    return animal.indexOf(filterVal) !== -1;
  })

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]}/>
      <AnimalList animals={filteredAnimals}/>
    </>
  );
};

export default Example;
