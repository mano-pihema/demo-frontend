import { Card } from '@chakra-ui/react';

const TodoDetail = () => {
  return (
    <Card.Root>
      <Card.Body gap='2'>
        <Card.Title mt='2'>Nue Camp</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
          Curabitur nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent='flex-end'></Card.Footer>
    </Card.Root>
  );
};

export default TodoDetail;
