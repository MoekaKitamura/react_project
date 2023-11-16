import { StackDivider, VStack, HStack, IconButton, Text } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="blackAlpha.100"
      width="80%"
      bgColor="white"
      borderWidth="1px"
      borderRadius="3px"
      p={5}
      alignItems="start"
    >
      <div>
        {todos.map((todo) => {
          return (
            <HStack div key={todo.id} spacing="5">
              <IconButton
                onClick={() => complete(todo.id)}
                icon={<VscCheck />}
                isRound
                bgColor="cyan.100"
              >
                完了
              </IconButton>
              <Text>{todo.content}</Text>
            </HStack>
          );
        })}
      </div>
    </VStack>
  );
};

export default List;
