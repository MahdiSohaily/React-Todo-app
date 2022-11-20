import { useDispatch, useSelector } from 'react-redux';
import {
  STATUS as StatusFilters,
  statusChanged,
} from '../../redux/filters/filterSlice';
import { currentStatus } from '../../utilities/todo/selector';

const StatusFilter = () => {
  const status = useSelector(currentStatus);
  const dispatch = useDispatch();

  const handleStatusChange = (status) => dispatch(statusChanged(status));
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const className = value === status ? 'selected' : '';

    return (
      <li key={value}>
        <button
          type="button"
          onClick={() => handleStatusChange(value)}
          className={className}
        >
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

export default StatusFilter;
