import initialState from '../initialState';
import { Types } from '../actions';

export default (state = initialState, action) => {
  console.log('state: ', state);
  console.log('action: ', action);

  switch (action.type) {
  case Types.SET_ASSIGNMENTS:
    return {
      ...state,
      assignments: action.data,
    };
  case Types.SET_CURRENT_ASSIGNMENT:
    return {
      ...state,
      currentAssignment: action.data,
    };
  default:
    return state;
  }
};
