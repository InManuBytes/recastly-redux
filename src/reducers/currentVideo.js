import Redux from 'redux';

// NOTE: RUN TESTS ON THE FUNCTION BELOW BY UNCOMMENTING CONSOLE LOGS
var currentVideoReducer = (state = null, action) => {
  //console.log('currentVideoReducer called');
  //console.log('action:', action, 'state:', state, 'video', action.video);
  if (action.type === 'CHANGE_VIDEO' && action.video !== undefined) {
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
