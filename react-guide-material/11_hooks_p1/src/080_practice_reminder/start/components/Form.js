import { useState } from "react";
import { useTodo } from "../context/TodoProvider";

const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [, dispatch] = useTodo();

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      editing: false,
    };

    dispatch({ type: "todo/add", todo: newTodo });

    setEnteredTodo("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
