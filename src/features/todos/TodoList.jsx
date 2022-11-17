import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';
import selectTodosID from '../../utilities/todo/selector';

const TodoList = () => {
  const todos = useSelector(selectTodosID);

  const renderedListItems = todos.map((todo) => (
    <TodoListItem key={todo} todoId={todo} />
  ));

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
