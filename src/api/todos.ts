import { AddTodo } from '@/models/todo';
import request from 'superagent';

const serverUrl = 'http://localhost:5044/api/Todo';

export function getTodos() {
  return request.get(serverUrl).then((res) => res.body);
}

export function getTodoById(id: number) {
  return request.get(`${serverUrl}/${id}`).then((res) => res.body);
}

export function addTodo(todo: AddTodo) {
  return request
    .post(serverUrl)
    .send(todo)
    .then((res) => res.body);
}

export function updateTodo(id: number, updateTodo: AddTodo) {
  return request
    .post(`${serverUrl}/${id}`)
    .send(updateTodo)
    .then((res) => res.body);
}

export function deleteTodo(id: number) {
  return request.delete(`${serverUrl}/${id}`).then((res) => res.body);
}
