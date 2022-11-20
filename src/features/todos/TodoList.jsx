import { shallowEqual, useSelector } from 'react-redux';
import selectTodosID from '../../utilities/todo/selector';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todosId = useSelector(selectTodosID, shallowEqual);

  const renderedListItems = todosId.map((id) => (
    <TodoListItem key={id} todoId={id} />
  ));

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
