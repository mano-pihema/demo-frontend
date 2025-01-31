import request from 'superagent';

const serverUrl = 'http://localhost:5044/api/Todo';

export function getTodos() {
  return request.get(serverUrl).then((res) => res.body);
}
