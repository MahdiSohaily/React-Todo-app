/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { STATUS } from '../../redux/filters/filterSlice';

export const selectTodos = (state) => state.todos.entities;

const filterByStatus = (state) => {
  const { status } = state.filters;
  const todos = Object.values(selectTodos(state));
  switch (status) {
    case STATUS.ALL:
      return todos;
    case STATUS.ACTIVE:
      return todos.filter((item) => item.completed === false);
    case STATUS.COMPLETED:
      return todos.filter((item) => item.completed === true);
    default:
      return todos;
  }
};

const filterByColor = (colors, todos) => {
  if (colors.length) {
    return todos.filter((item) =>
      (colors.indexOf(item.color) >= 0 ? item : null));
  }
  return todos;
};

const selectTodosID = (state) => {
  const { colors } = state.filters;
  const todos = filterByStatus(state);
  const filtered = filterByColor(colors, todos);
  return filtered.map((item) => item.id);
};
export default selectTodosID;

// filter selectors

export const currentStatus = (state) => state.filters.status;
export const currentColors = (state) => state.filters.colors;
