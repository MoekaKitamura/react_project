import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj)

  const reset = () => {
    setPerson({ name: "", age: ""})
  }

  const changeName = (e) => {
    // setPerson({name: e.target.value, age: person.age})
    setPerson({...person, name: e.target.value})
  }

  const changeAge = (e) => {
    setPerson({...person, age: e.target.value})
  }

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <div>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  )
};

export default Example;
