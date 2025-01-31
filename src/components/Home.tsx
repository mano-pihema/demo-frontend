import { getTodos } from '@/api/todos';
import { Container, Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ['fetch'],
    queryFn: () => getTodos(),
  });

  if (isPending) return <h3>Loading...</h3>;
  if (isError) return <div>{error.message}</div>;

  console.log(data);

  return (
    <Container backgroundColor={'teal'}>
      <h1>Hello App</h1>
      <Flex direction={'column'} gap={4}>
        <div>Chore1</div>
        <div>Chore2</div>
        <div>Chore3</div>
      </Flex>
    </Container>
  );
};

export default Home;
