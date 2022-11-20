import { shallowEqual, useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todosId = useSelector(
    (state) => Object.keys(state.todos.entities),
    shallowEqual,
  );

  const renderedListItems = todosId.map((id) => (
    <TodoListItem key={id} todoId={id} />
  ));

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
