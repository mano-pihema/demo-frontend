import { Route, createRoutesFromElements } from 'react-router-dom';
import TodoDetail from './components/TodoDetail';
import Home from './components/Home';
import App from './App';
import AddTodoForm from './components/AddTodoForm';

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path='/add' element={<AddTodoForm />} />
    <Route path='/todoDetail' element={<TodoDetail />} />
  </Route>
);
