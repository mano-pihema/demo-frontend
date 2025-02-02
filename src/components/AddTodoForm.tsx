import { Container, Input, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/api/todos';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  id: 0,
  title: '',
  description: '',
  dueDate: '',
  priority: '',
  status: '',
};

const AddTodoForm = () => {
  const [formData, setFormData] = useState(initialForm);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: () => mutationMap(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch'] });
      navigate('/');
    },
    onError: (error) => {
      console.error('Validation error:', error);
    },
  });

  function mutationMap() {
    const mappedFormdata = { ...formData, dueDate: new Date(formData.dueDate) };
    return addTodo(mappedFormdata);
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addMutation.mutate();
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container p={9}>
      <Text textStyle='xl' pb={2}>
        Add a Task
      </Text>
      <form onSubmit={submitHandler}>
        <Stack gap={4}>
          <Input
            type='text'
            name='title'
            placeholder='title'
            onChange={onChangeHandler}
          />
          <Input
            type='text'
            name='description'
            placeholder='description'
            onChange={onChangeHandler}
          />
          <Input
            type='date'
            name='dueDate'
            placeholder='due date'
            onChange={onChangeHandler}
          />
          <Input
            type='text'
            name='priority'
            placeholder='priority'
            onChange={onChangeHandler}
          />
          <Input
            type='text'
            name='status'
            placeholder='status'
            onChange={onChangeHandler}
          />
          <button type='submit'>Submit</button>
          {addMutation.error && (
            <Text color='red.500'>{addMutation.error.message}</Text>
          )}
        </Stack>
      </form>
    </Container>
  );
};

export default AddTodoForm;
