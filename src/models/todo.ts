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

export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export enum Status {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
}

export enum DueDate {
  URGENT = 'Urgent',
  LEAST_URGENT = 'Least Urgent',
}
