import { Container, Flex } from '@chakra-ui/react';

const Home = () => {
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
