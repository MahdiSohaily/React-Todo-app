import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import { selectTodos } from '../../utilities/todo/selector';

const TodoList = () => {
  const todos = useSelector(selectTodos);

  const renderedListItems = Object.keys(todos).map((todoID) => (
    <TodoListItem key={todoID} todo={todos[todoID]} />
  ));

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
