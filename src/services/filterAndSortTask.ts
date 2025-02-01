import { Todo } from '@/models/todo';

export function filterAndSortTodos(
  todos: Todo[],
  filterBar: { priority: string; status: string; dueDate: string }
) {
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
  return processedTodos;
}
