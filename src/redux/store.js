import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { client } from '../api/client';

const fetchTodosMiddleware = (storeApi) => (next) => (action) => {
  if (action.type === 'todos/fetchTodos') {
    client.get('todos').then((todos) => {
      storeApi.dispatch({
        type: 'todos/todosLoaded',
        payload: todos,
      });
    });
  }
  next(action);
};

const customeEnhencer = composeWithDevTools(
  applyMiddleware(fetchTodosMiddleware),
);

const store = createStore(rootReducer, customeEnhencer);

export default store;
