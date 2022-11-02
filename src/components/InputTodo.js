import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function InputTodo({ addTodoItem }) {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTodoItem(title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Add Todo..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};
