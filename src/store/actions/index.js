import axios from 'axios';

const Types = {
  SET_ASSIGNMENTS: 'SET_ASSIGNMENTS',
  SET_CURRENT_ASSIGNMENT: 'SET_CURRENT_ASSIGNMENT',
};

const Actions = {
  setAssignments: (assignments) => ({
    type: Types.SET_ASSIGNMENTS,
    data: assignments,
  }),
  fetchAssignments: () => async (dispatch) => {
    try {
      const response = await axios.get('/some/route');
      const { assignments } = response.data;
      dispatch(this.setAssignments(assignments));
    } catch (err) {
      console.log('Logging in failed.');
      console.error(err);
    }
  },
  setAssignment: (num) => ({
    type: Types.SET_CURRENT_ASSIGNMENT,
    data: num,
  }),
};

export {
  Types,
  Actions,
};
