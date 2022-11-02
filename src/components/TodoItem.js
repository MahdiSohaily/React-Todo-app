/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem({
  id, title, completed, handleCompleted, delTodo,
}) {
  const [edit, setEdit] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      {!edit ? (
        <div onDoubleClick={() => setEdit(true)}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleCompleted(id)}
          />
          <button type="button" onClick={() => delTodo(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
      ) : (
        <input value={title} type="text" className={styles.textInput} />
      )}
    </li>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
