const selectTodosID = (state) => state.todos.entities;
export default selectTodosID;

export const selectTodos = (state) => state.todos.entities;

// filter selectors

export const currentStatus = (state) => state.filters.status;
export const currentColors = (state) => state.filters.colors;
