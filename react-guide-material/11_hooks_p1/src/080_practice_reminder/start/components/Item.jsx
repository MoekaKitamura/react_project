import React from "react";
import { useTodo } from "../context/TodoProvider";

const Item = ({ todo }) => {
  const [, dispatch] = useTodo();

  const deleteTodo = () => dispatch({ type: "todo/delete", todo });

  const changeContent = (e) => {
    const newTodo = { ...todo, content: e.target.value };

    dispatch({ type: "todo/update", todo: newTodo });
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };

    dispatch({ type: "todo/update", todo: newTodo });
  };

  const confirmContent = (e) => {
    e.preventDefault();
    toggleEditMode();
  };

  return (
    <div>
      <button onClick={deleteTodo}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
        <span>
          {todo.editing ? (
            <input
              type="text"
              value={todo.content}
              onChange={(e) => changeContent(e)}
              onBlur={toggleEditMode}
            />
          ) : (
            <span onDoubleClick={toggleEditMode}>{todo.content}</span>
          )}
        </span>
      </form>
    </div>
  );
};

export default Item;
