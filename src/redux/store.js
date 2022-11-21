import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';

const fetchTodosMiddleware = (storeApi) => (next) => (action) => {
  if (action.type === 'todos/fetchTodos') {
  }
};

const store = createStore(rootReducer, applyMiddleware(fetchTodosMiddleware));

export default store;
