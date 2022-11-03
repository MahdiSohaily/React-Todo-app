import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  data, handleCompleted, delTodo, editTodo,
}) {
  return (
    <div>
      {data.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          id={item.id}
          completed={item.completed}
          handleCompleted={handleCompleted}
          delTodo={delTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

TodosList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodosList;
