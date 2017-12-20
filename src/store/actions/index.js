import axios from 'axios';

const Types = {
  SET_ASSIGNMENTS: 'SET_ASSIGNMENTS',
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
};

export {
  Types,
  Actions,
};
