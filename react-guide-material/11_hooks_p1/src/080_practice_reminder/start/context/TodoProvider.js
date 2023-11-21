import React from "react";
import { useReducer } from "react";
import { useState, useContext, createContext } from "react";

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      return todos.filter((todo) => todo.id !== action.todo.id);
    case "todo/update":
      return todos.map((todo) => {
        return todo.id === action.todo.id ? action.todo : todo;
      });
    default:
      return todos;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, todosList);

  return (
    <TodoContext.Provider value={[todos, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
};
