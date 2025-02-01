import { Container, Input, Stack, Text } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '@/api/todos';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Todo } from '@/models/todo';

interface TodoCardProps {
  todo: Todo;
  showForm: (show: boolean) => void;
}

const EditTodoForm = ({ todo, showForm }: TodoCardProps) => {
  const [formData, setFormData] = useState(todo);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: () => updateTodo(todo.id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch'] });
      navigate('/');
    },
  });

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    editMutation.mutate();
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
      [name]: name === 'dueDate' ? new Date(value) : value,
    });
  };

  return (
    <Container p={9}>
      <Text textStyle='xl' pb={2}>
        Editing Task
      </Text>
      <form onSubmit={submitHandler}>
        <Stack gap={4}>
          <Input
            type='text'
            name='title'
            value={formData.title}
            onChange={onChangeHandler}
          />
          <Input
            type='text'
            name='description'
            value={formData.description}
            onChange={onChangeHandler}
          />
          <Input
            type='date'
            name='dueDate'
            value={formData.dueDate.toISOString().split('T')[0]}
            onChange={onChangeHandler}
          />
          <Input
            type='text'
            name='priority'
            value={formData.priority}
            onChange={onChangeHandler}
          />
          <Input
            type='text'
            name='status'
            value={formData.status}
            onChange={onChangeHandler}
          />
          <button type='submit'>Submit</button>
          <button type='button' onClick={() => showForm(false)}>
            Cancel
          </button>
        </Stack>
      </form>
    </Container>
  );
};

export default EditTodoForm;
