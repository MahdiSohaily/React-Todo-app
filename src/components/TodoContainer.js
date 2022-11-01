import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
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
    console.log('deleted', id);
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Navbar />
        <Header />
        <InputTodo />
        <TodosList data={todos} handleCompleted={this.handleCompleted} />
      </>
    );
  }
}
