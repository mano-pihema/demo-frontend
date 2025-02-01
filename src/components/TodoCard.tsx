import { Todo } from '@/models/todo';
import { Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface TodoCardProps {
  todo: Todo;
}
const TodoCard = ({ todo }: TodoCardProps) => {
  const { id, title, dueDate, priority, status } = todo;

  const navigate = useNavigate();

  return (
    <Card.Root onClick={() => navigate(`/todo/${id}`, { state: { todo } })}>
      <Card.Body gap='2'>
        <Card.Title mt='2'>{title}</Card.Title>
        <Card.Description>Due: {dueDate.toDateString()}</Card.Description>
        <Card.Description>priority: {priority}</Card.Description>
        <Card.Description>status: {status}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default TodoCard;
