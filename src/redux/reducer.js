import { combineReducers } from 'redux';
import todoReducer from './todos/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
