import { Todo } from '@/models/todo';
import { Button, Card } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditTodoForm from './EditTodoForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '@/api/todos';
interface TodoCardProps {
  todo: Todo;
}
const TodoDetail = () => {
  const location = useLocation();

  const state = location.state as TodoCardProps;
  const { id, title, description, dueDate, priority, status } = state.todo;

  const [showEdit, setShowEdit] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch'] });
      navigate('/');
    },
  });
  function handleDelete() {
    deleteMutation.mutate();
  }
  function handleEdit() {
    setShowEdit(true);
  }
  return showEdit ? (
    <EditTodoForm todo={state.todo} showForm={setShowEdit} />
  ) : (
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
        <Button onClick={handleEdit}>Edit</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default TodoDetail;
