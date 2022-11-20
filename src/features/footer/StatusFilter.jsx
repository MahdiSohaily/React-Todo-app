import { useSelector } from 'react-redux';
import { STATUS as StatusFilters } from '../../redux/filters/filterSlice';
import { currentStatus } from '../../utilities/todo/selector';

const StatusFilter = () => {
  const status = useSelector(currentStatus);

  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const className = value === status ? 'selected' : '';

    return (
      <li key={value}>
        <button type="button" className={className}>
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
