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
  default:
    return state;
  }
};
