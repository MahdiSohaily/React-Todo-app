/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';
import { client } from '../../api/client';

const ACTIONS = {
  TODOS_LOADED: 'todos/todosLoaded',
  TODO_ADDED: 'todo/todo_added',
  TODO_REMOVED: 'todo/todo_removed',
  TODO_TOGGLED: 'todo/todo_toggled',
  TODO_COLOR_SELECTED: 'todo/todo_color_selected',
  TODOS_MARKED_COMPLETED: 'todos/todos_marked_completed',
  COMPLETED_TODOS_DELETED: 'todos/completed_todos_deleted',
};

export const availableColors = ['green', 'blue', 'orange', 'purple', 'red'];

const initState = {
  entities: {},
  status: 'ideal',
};

const todoReducer = produce((state, action) => {
  switch (action.type) {
    case ACTIONS.TODOS_LOADED: {
      const todos = action.payload;
      const entities = {};
      todos.forEach((item) => {
        entities[item.id] = item;
      });
      state.entities = entities;
      break;
    }
    case ACTIONS.TODO_ADDED: {
      const todoItem = action.payload;
      state.entities[todoItem.id] = todoItem;
      break;
    }
    case ACTIONS.TODO_REMOVED: {
      const id = action.payload;
      delete state.entities[id];
      break;
    }
    case ACTIONS.TODO_TOGGLED: {
      const toggleId = action.payload;
      state.entities[toggleId].completed = !state.entities[toggleId].completed;
      break;
    }
    case ACTIONS.TODO_COLOR_SELECTED: {
      state.entities[action.payload.id].color = action.payload.color;
      break;
    }
    case ACTIONS.TODOS_MARKED_COMPLETED: {
      const todos = Object.values(state.entities);
      todos.forEach((todo) => {
        todo.completed = true;
      });
      break;
    }
    case ACTIONS.COMPLETED_TODOS_DELETED: {
      const allTodos = Object.values(state.entities);
      allTodos.forEach((todo) => {
        if (todo.completed) {
          delete state.entities[todo.id];
        }
      });
      break;
    }
    default:
      return state;
  }
}, initState);

export default todoReducer;

const assaignLoadedTodos = (todos) => ({
  type: 'todos/todosLoaded',
  payload: todos,
});

export const todoAdded = (todo) => ({
  type: ACTIONS.TODO_ADDED,
  payload: todo,
});

export const todoRemoved = (id) => ({
  type: ACTIONS.TODO_REMOVED,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: ACTIONS.TODO_TOGGLED,
  payload: id,
});

export const markAllCompleted = () => ({
  type: ACTIONS.TODOS_MARKED_COMPLETED,
});

export const deleteCompleted = () => ({
  type: ACTIONS.COMPLETED_TODOS_DELETED,
});

export const todoColorChange = (id, color) => ({
  type: ACTIONS.TODO_COLOR_SELECTED,
  payload: {
    id,
    color,
  },
});

// ASYNC FUNCTIONS
export const saveNewTodo = (text) => async (dispatch) => {
  const newTodo = { text, completed: false };
  const result = await client.post('todos', newTodo);
  dispatch(todoAdded(result));
};

export const fetchTodos = (dispatch) => {
  client.get('todos').then((todos) => {
    dispatch(assaignLoadedTodos(todos));
  });
};
