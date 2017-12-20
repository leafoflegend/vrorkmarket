import initialState from '../initialState';
import { Types } from '../actions';

export default (state = initialState, action) => {
  console.log('state: ', state);
  console.log('action: ', action);

  switch (action.type) {
  case Types.OPEN_MODAL:
    return {
      ...state,
      modalOpen: true,
    };
  case Types.CLOSE_MODAL:
    return {
      ...state,
      modalOpen: false,
    };
  default:
    return state;
  }
};
