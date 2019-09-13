import Redux from 'redux';

// NOTE: RUN TESTS ON THE FUNCTION BELOW
var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO' && action.video !== undefined) {
    return action.video;
  } else {
    return state;
  }
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
