import { AddTodo } from '@/models/todo';
import request from 'superagent';

const serverUrl = 'http://localhost:5044/api/Todo';

export function getTodos() {
  return request.get(serverUrl).then((res) => res.body);
}

export function addTodo(todo: AddTodo) {
  return request
    .post(serverUrl)
    .send(todo)
    .then((res) => res.body);
}
