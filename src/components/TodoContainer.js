import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  const addTodoItem = (title) => {
    const todo = {
      id: todos.length + 1,
      title,
      completed: false,
    };

    setTodos([...todos, todo]);
  };

  useEffect(() => {
    console.log('test run');
  });

  return (
    <div className="container">
      <div className="inner">
        <Navbar />
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList
          data={todos}
          handleCompleted={handleCompleted}
          delTodo={delTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
