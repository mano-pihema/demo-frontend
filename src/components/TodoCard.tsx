import { Todo } from '@/models/todo';
import { Button, Card } from '@chakra-ui/react';

interface TodoCardProps {
  todo: Todo;
}
const TodoCard = ({ todo }: TodoCardProps) => {
  const { id, title, description, dueDate, priority, status } = todo;

  function handleDelete() {
    console.log('Delete', id);
  }
  return (
    <Card.Root>
      <Card.Body gap='2'>
        <Card.Title mt='2'>{title}</Card.Title>
        <Card.Description>Description: {description}</Card.Description>
        <Card.Description>Due: {dueDate.toDateString()}</Card.Description>
        <Card.Description>priority: {priority}</Card.Description>
        <Card.Description>status: {status}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent='flex-end'>
        <Button onClick={handleDelete}>Delete</Button>
        <Button>Edit</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default TodoCard;
