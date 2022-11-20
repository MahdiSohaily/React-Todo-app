/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as TimesSolid } from './times-solid.svg';
import {
  todoRemoved,
  toggleTodo,
  availableColors,
} from '../../redux/todos/todoSlice';

export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const TodoListItem = ({ todoId }) => {
  // get current to do to display by id
  const todo = useSelector((state) => state.todos.entities[todoId]);
  const { id, text, completed, color } = todo;

  const [defaultColor, setDefaultColor] = useState(color);

  // Get the available color options
  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  const dispatch = useDispatch();

  // a handler to toggle todo completed status
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  // a handler to handle deleting todo items
  const handleRemove = (id) => {
    dispatch(todoRemoved(id));
  };

  const handleColorChange = (id, color) => {
    setDefaultColor(color);
  };

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => handleToggle(id)}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <label htmlFor="color">
            <select
              id="color"
              className="colorPicker"
              defaultValue={color}
              style={{ color: defaultColor }}
              onChange={(e) => handleColorChange(id, e.target.value)}
            >
              <option value="">{}</option>
              {colorOptions}
            </select>
          </label>
          <button
            type="button"
            className="destroy"
            onClick={() => handleRemove(id)}
          >
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
