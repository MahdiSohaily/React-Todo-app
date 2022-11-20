import { combineReducers } from 'redux';
import todoReducer from './todos/todoSlice';
import filterReducer from './filters/filterSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
