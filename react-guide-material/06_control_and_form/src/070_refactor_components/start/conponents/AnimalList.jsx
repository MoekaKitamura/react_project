import AnimalItem from "./AnimalItem";

const AnimalList = ({animals}) => {
  if (animals.length === 0) {
    return <h1>アニマルがいません!!!!!</h1>
  }

  return (
    <ul>
      {animals.map((animal) => <AnimalItem key={animal} animal={animal} />)}
    </ul>
  )
}

export default AnimalList
