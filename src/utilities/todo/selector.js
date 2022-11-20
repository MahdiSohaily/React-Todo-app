/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { STATUS } from '../../redux/filters/filterSlice';

const selectTodosID = (state) => Object.keys(state.todos.entities);
export default selectTodosID;

export const selectTodos = (state) => state.todos.entities;

const filterByStatus = (state) => {
  const { status } = state.filters;
  const todos = Object.values(selectTodos(state));
  switch (status) {
    case STATUS.ALL:
      return todos;
    case STATUS.ACTIVE:
      break;
    case STATUS.COMPLETED:
      break;
    default:
      return state.todos.entities;
  }
};

// filter selectors

export const currentStatus = (state) => state.filters.status;
export const currentColors = (state) => state.filters.colors;
