import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

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
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

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
