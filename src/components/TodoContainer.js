import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  handleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  editTodo = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  addTodoItem = (title) => {
    const { todos } = this.state;
    const todo = {
      id: todos.length + 1,
      title,
      completed: false,
    };

    this.setState({
      todos: [...todos, todo],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Navbar />
          <Header />
          <InputTodo addTodoItem={this.addTodoItem} />
          <TodosList
            data={todos}
            handleCompleted={this.handleCompleted}
            delTodo={this.delTodo}
            editTodo={this.editTodo}
          />
        </div>
      </div>
    );
  }
}
