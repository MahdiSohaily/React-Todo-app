import { combineReducers } from 'redux';
import todoReducer from './redux/todos/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
