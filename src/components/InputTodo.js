import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function InputTodo({ addTodoItem }) {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      alert("Todo field can't be empty");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Add Todo..."
      />
      <button className="input-submit" type="submit">Submit</button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};
