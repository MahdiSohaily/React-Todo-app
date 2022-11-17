const selectTodosID = (state) => state.todos.entities.map((todo) => todo.id);
export default selectTodosID;

export const selectTodos = (state) => state.todos.entities;
