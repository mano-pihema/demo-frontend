import { getTodos } from '@/api/todos';
import { Container, Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import TodoCard from './TodoCard';
import { Todo } from '@/models/todo';
import FilterBar from './FilterBar';
import { useState } from 'react';

const filterbarState = {
  priority: '',
  status: '',
  dueDate: '',
};

const Home = () => {
  const [filterBar, setFilterBar] = useState(filterbarState);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['fetch'],
    queryFn: () => getTodos(),
    staleTime: 1000 * 60 * 5, // 5 minute cache
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilterBar((prevState) => ({
      ...prevState,
      [filterType]: value,
    }));
  };

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <div>{error.message}</div>;

  const todos: Todo[] = data || [];

  const processedTodos = todos
    .map((todo) => ({
      ...todo,
      dueDate: new Date(todo.dueDate),
    }))
    .filter((todo) => {
      return (
        (filterBar.priority === '' || todo.priority === filterBar.priority) &&
        (filterBar.status === '' || todo.status === filterBar.status)
      );
    });

  if (filterBar.dueDate === 'Urgent') {
    processedTodos.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  } else if (filterBar.dueDate === 'Least Urgent') {
    processedTodos.sort((a, b) => b.dueDate.getTime() - a.dueDate.getTime());
  }

  return (
    <Container backgroundColor={'gray.300'} py={4}>
      <FilterBar onFilterChange={handleFilterChange} />
      <Flex direction={'column'} gap={4} pt={4}>
        {processedTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </Flex>
    </Container>
  );
};

export default Home;
