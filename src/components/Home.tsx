import { getTodos } from '@/api/todos';
import { Container, Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import TodoCard from './TodoCard';
import { Todo } from '@/models/todo';
import FilterBar from './FilterBar';
import { useState } from 'react';
import { filterAndSortTodos } from '@/services/filterAndSortTask';

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
    setFilterBar((previousState) => ({
      ...previousState,
      [filterType]: value,
    }));
  };

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <div>{error.message}</div>;

  const todos: Todo[] = data || [];

  const processedTodos = filterAndSortTodos(todos, filterBar);

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
