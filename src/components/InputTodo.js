import React, { useState } from 'react';

export default function InputTodo() {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title);
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
