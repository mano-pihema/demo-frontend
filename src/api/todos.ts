import { AddTodo, Todo } from '@/models/todo';
import request from 'superagent';

const serverUrl = 'http://localhost:5044/api/Todo';

export function getTodos(): Promise<Todo[]> {
  return request.get(serverUrl).then((res) => res.body);
}

export function getTodoById(id: number): Promise<Todo> {
  return request.get(`${serverUrl}/${id}`).then((res) => res.body);
}

export async function addTodo(todo: AddTodo): Promise<Todo> {
  try {
    const res = await request.post(serverUrl).send(todo);
    return res.body;
  } catch (error: any) {
    throw error.response?.body ?? error;
  }
}

export function updateTodo(id: number, updateTodo: AddTodo): Promise<Todo> {
  return request
    .post(`${serverUrl}/${id}`)
    .send(updateTodo)
    .then((res) => res.body);
}

export function deleteTodo(id: number): Promise<void> {
  return request.delete(`${serverUrl}/${id}`).then((res) => res.body);
}
