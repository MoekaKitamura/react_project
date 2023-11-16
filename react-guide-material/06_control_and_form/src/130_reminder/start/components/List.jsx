import React from "react";

export const List = ({todos, setTodos}) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => deleteTodo(todo.id)}>完了</button>
          <span>{todo.content}</span>
        </div>
      ))}
    </>
  );
};
