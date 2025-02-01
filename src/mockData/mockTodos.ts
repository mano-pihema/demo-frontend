import { Todo } from '../models/todo';

const mockTodos: Todo[] = [
  {
    id: 1,
    title: 'Buy groceries',
    description: 'Milk, Bread, Cheese, Eggs',
    dueDate: new Date('2021-12-01'),
    priority: 'High',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Read a book',
    description: 'Finish reading "The Great Gatsby"',
    dueDate: new Date('2021-12-15'),
    priority: 'Low',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Workout',
    description: 'Go for a 30-minute run',
    dueDate: new Date('2021-12-10'),
    priority: 'Medium',
    status: 'in-progress',
  },
];

export default mockTodos;
