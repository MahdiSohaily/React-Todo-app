import { useDispatch, useSelector } from 'react-redux';
import { currentColors } from '../../utilities/todo/selector';

export const availableColors = ['green', 'blue', 'orange', 'purple', 'red'];

const ColorFilters = () => {
  const colors = useSelector(currentColors);
  const dispatch = useDispatch();

  const handleFilterColor = () => {
    
  };

  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);

    return (
      <label htmlFor={color} key={color}>
        <input
          id={color}
          type="checkbox"
          name={color}
          defaultChecked={checked}
          onChange={() => {
            handleFilterColor(color);
          }}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        />
        {color}
        <br />
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};

export default ColorFilters;
