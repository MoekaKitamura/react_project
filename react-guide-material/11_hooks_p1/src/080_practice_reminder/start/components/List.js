import { useTodo } from "../context/TodoProvider";
import Item from "./Item";

const List = () => {
  const [todos] = useTodo();

  return (
    <div>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
