/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';

/* eslint-disable no-case-declarations */
const ACTIONS = {
  STATUS_CHANGED: 'filter/statusChanged',
  COLORS_CHANGED: 'filter/colorsChanged',
};

export const STATUS = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active',
};

const initState = {
  status: STATUS.ALL,
  colors: [],
};

const filterReducer = produce((state, action) => {
  switch (action.type) {
    case ACTIONS.STATUS_CHANGED:
      state.status = action.payload;
      break;
    case ACTIONS.COLORS_CHANGED:
      const color = action.payload;
      if (state.colors.indexOf(color) < 0) {
        state.colors.push(color);
      }
      state.colors.filter((item) => item !== color);
      break;
    default:
      return state;
  }
}, initState);
export default filterReducer;

export const statusChanged = (status) => ({
  type: ACTIONS.STATUS_CHANGED,
  payload: status,
});

export const colorsChanged = (color) => ({
  type: ACTIONS.COLORS_CHANGED,
  payload: color,
});
