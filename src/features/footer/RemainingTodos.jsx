import { useSelector } from 'react-redux';
import { selectTodos } from '../../utilities/todo/selector';

const RemainingTodos = () => {
  const count = useSelector((state) => {
    const todos = Object.values(selectTodos(state));
    return todos.filter((item) => item.completed === false).length;
  });
  const suffix = count === 1 ? '' : 's';

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>
        {' '}
        {count}
        {' '}
      </strong>
      item
      {suffix}
      {' '}
      left
    </div>
  );
};

export default RemainingTodos;
