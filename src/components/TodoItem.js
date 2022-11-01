/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';

function TodoItem({
  id, title, completed, handleCompleted,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          handleCompleted(id);
        }}
      />
      {title}
    </li>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  handleCompleted: PropTypes.func.isRequired,
};

export default TodoItem;
