import { getTodos } from '@/api/todos';
import { Container, Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import TodoCard from './TodoCard';
import { Todo } from '@/models/todo';

const Home = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['fetch'],
    queryFn: () => getTodos(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <div>{error.message}</div>;

  const todos: Todo[] = data || [];

  const processedTodos = todos.map((todo) => ({
    ...todo,
    dueDate: new Date(todo.dueDate),
  }));

  return (
    <Container backgroundColor={'gray.300'} py={4}>
      <Flex direction={'column'} gap={4}>
        {processedTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </Flex>
    </Container>
  );
};

export default Home;
