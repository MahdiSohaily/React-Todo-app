import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as TimesSolid } from './times-solid.svg';
import { selectTodos } from '../../utilities/todo/selector';
import { todoRemoved, toggleTodo } from '../../redux/todos/todoSlice';

export const availableColors = ['green', 'blue', 'orange', 'purple', 'red'];
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const TodoListItem = ({ todoId }) => {
  // get current to do to display by id
  const todo = useSelector(selectTodos).filter((item) => item.id === todoId)[0];
  const { text, completed, color } = todo;

  const [defaultColor, setDefaultColor] = useState('red');

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

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => handleToggle(todoId)}
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
              onChange={(e) => setDefaultColor(e.target.value)}
            >
              <option value="">{}</option>
              {colorOptions}
            </select>
          </label>
          <button
            type="button"
            className="destroy"
            onClick={() => handleRemove(todoId)}
          >
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  todoId: PropTypes.number.isRequired,
};

export default TodoListItem;
