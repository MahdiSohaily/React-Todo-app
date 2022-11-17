const ACTIONS = {
  TODO_ADDED: 'todo/todo_added',
  TODO_REMOVED: 'todo/todo_removed',
  TODO_TOGGLED: 'todo/todo_toggled',
  TODO_COLOR_SELECTED: 'todo/todo_color_selected',
  TODOS_MARKED_COMPLETED: 'todos/todos_marked_completed',
  COMPLETED_TODOS_DELETED: 'todos/completed_todos_deleted',
};

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

export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case ACTIONS.TODO_ADDED:
      return {
        ...state,
        entities: [...state.entities, action.payload],
      };
    case ACTIONS.TODO_REMOVED:
      return {
        ...state,
        entities: state.entities.filter((todo) => todo.id !== action.payload),
      };
    case ACTIONS.TODO_TOGGLED:
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
    case ACTIONS.TODO_COLOR_SELECTED:
    case ACTIONS.TODOS_MARKED_COMPLETED:
    case ACTIONS.COMPLETED_TODOS_DELETED:
    default:
      return state;
  }
}

export const todoAdded = (text) => ({
  type: ACTIONS.TODO_ADDED,
  payload: { id: 6, text, completed: false },
});

export const todoRemoved = (id) => ({
  type: ACTIONS.TODO_REMOVED,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: ACTIONS.TODO_TOGGLED,
  payload: id,
});
