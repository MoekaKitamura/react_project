import React from "react";

export const Form = ({ setTodos, inputTodo, setInputTodo }) => {
  const addTodo = (e) => {
    if (inputTodo === "") return;

    e.preventDefault();

    setTodos((prev) => [...prev, { id: Math.random(), content: inputTodo }]);
    setInputTodo("");
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </>
  );
};
