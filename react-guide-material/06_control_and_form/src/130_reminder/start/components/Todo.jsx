import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

export const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);
  const [inputTodo, setInputTodo] = useState("");

  return (
    <>
      <List todos={todos} setTodos={setTodos} />
      <Form setTodos={setTodos} inputTodo={inputTodo} setInputTodo={setInputTodo} />
    </>
  );
};
