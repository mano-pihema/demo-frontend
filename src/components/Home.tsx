//import { getTodos } from '@/api/todos';
import mockTodos from '@/mockData/mockTodos';
import { Container, Flex } from '@chakra-ui/react';
//import { useQuery } from '@tanstack/react-query';
import TodoCard from './TodoCard';

const Home = () => {
  // const { data, isError, error, isPending } = useQuery({
  //   queryKey: ['fetch'],
  //   queryFn: () => getTodos(),
  // });

  // if (isPending) return <h3>Loading...</h3>;
  // if (isError) return <div>{error.message}</div>;

  // console.log(data);

  return (
    <Container backgroundColor={'gray.300'} py={4}>
      <Flex direction={'column'} gap={4}>
        {mockTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </Flex>
    </Container>
  );
};

export default Home;
