import { shallowEqual, useSelector } from 'react-redux';
import selectTodosID from '../../utilities/todo/selector';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todosId = useSelector(selectTodosID, shallowEqual);
  const loading = useSelector((state) => state.todos.status);

  const renderedListItems = todosId.map((id) => (
    <TodoListItem key={id} todoId={id} />
  ));

  if (loading === 'loading') {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    );
  }

  if (loading === 'error') {
    return (
      <div className="todo-list">
        <p>Something went wrong while fetching data from database</p>
      </div>
    );
  }

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
