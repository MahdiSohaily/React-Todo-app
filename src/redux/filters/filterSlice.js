/* eslint-disable no-case-declarations */
const ACTIONS = {
  STATUS_CHANGED: 'filter/statusChanged',
  COLORS_CHANGED: 'filter/colorsChanged',
};

const STATUS = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active',
};

const initState = {
  status: STATUS.ALL,
  colors: [],
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case ACTIONS.COLORS_CHANGED:
      const color = action.payload;
      if (state.colors.indexOf(color) < 0) {
        return {
          ...state,
          colors: [...state.colors, color],
        };
      }
      return {
        ...state,
        colors: state.colors.filter((item) => item !== color),
      };

    default:
      return state;
  }
};
export default filterReducer;
