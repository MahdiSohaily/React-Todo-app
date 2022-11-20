/* eslint-disable no-case-declarations */
const ACTIONS = {
  TODO_ADDED: 'todo/todo_added',
  TODO_REMOVED: 'todo/todo_removed',
  TODO_TOGGLED: 'todo/todo_toggled',
  TODO_COLOR_SELECTED: 'todo/todo_color_selected',
  TODOS_MARKED_COMPLETED: 'todos/todos_marked_completed',
  COMPLETED_TODOS_DELETED: 'todos/completed_todos_deleted',
};

const initState = {
  entities: {
    1: {
      id: 1,
      text: 'Deign ui',
      completed: true,
      color: 'red',
    },
    2: { id: 2, text: 'discover state', completed: false },
    3: { id: 3, text: 'discover actions', completed: false },
    4: {
      id: 4,
      text: 'implement reducer',
      completed: false,
      color: 'blue',
    },
    5: {
      id: 5,
      text: 'Complete patterns',
      completed: false,
      color: 'red',
    },
  },
};

export default function todoReducer(state = initState, action) {
  switch (action.type) {
    case ACTIONS.TODO_ADDED:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload,
        },
      };
    case ACTIONS.TODO_REMOVED:
      const entities = { ...state.entities };
      delete entities[action.payload];
      return {
        ...state,
        entities,
      };
    case ACTIONS.TODO_TOGGLED:
      const toggleId = action.payload;
      const todo = state.entities[toggleId];
      return {
        
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
