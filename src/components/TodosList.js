import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({ data = [], handleCompleted }) {
  return (
    <div>
      {data.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          id={item.id}
          completed={item.completed}
          handleCompleted={handleCompleted}
        />
      ))}
    </div>
  );
}

TodosList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  handleCompleted: PropTypes.func.isRequired,
};

export default TodosList;