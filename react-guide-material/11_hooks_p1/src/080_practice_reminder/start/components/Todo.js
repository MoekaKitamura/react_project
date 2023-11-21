import List from "./List";
import Form from "./Form";
import { TodoProvider } from "../context/TodoProvider";

const Todo = () => {
  return (
    <TodoProvider>
      <List />
      <Form />
    </TodoProvider>
  );
};
export default Todo;
