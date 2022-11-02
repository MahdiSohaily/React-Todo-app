/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem({
  id,
  title,
  completed,
  handleCompleted,
  delTodo,
  editTodo,
}) {
  const [edit, setEdit] = useState(false);
  const [EditTitle, setEditTitle] = useState(title);
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
        <input
          type="text"
          className={styles.textInput}
          value={EditTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
            editTodo(e.target.value, id);
          }}
        />
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
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
