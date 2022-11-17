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


