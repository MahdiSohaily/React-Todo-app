const initState = {
  entities: [
    {
      id: 1,
      text: 'Deign ui',
      completed: true,
      color: 'red',
    },
    { id: 2, text: 'discover state', completed: false },
    { id: 3, text: 'discover actions', completed: false },
    {
      id: 4,
      text: 'implement reducer',
      completed: false,
      color: 'blue',
    },
    {
      id: 5,
      text: 'Complete patterns',
      completed: false,
      color: 'red',
    },
  ],
};

export default function todosReducer(state = initState, action) {
  switch (action.type) {
    case 'todos/todoAdded':
      return {
        ...state,
        entities: [...state.entities, action.payload],
      };

    case 'todos/todoToggled':
      return {
        ...state,
        entities: state.entities.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }

          return todo;
        }),
      };
    case 'todos/todoDeleted':
      return {
        ...state,
        entities: state.entities.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export const todoAdded = (text) => ({
  type: 'todos/todoAdded',
  payload: { id: 6, text, completed: false },
});

export const selectTodos = (state) => state.todos.entities;
