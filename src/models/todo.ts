export interface Todo {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  status: string;
}

export interface AddTodo {
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  status: string;
}
