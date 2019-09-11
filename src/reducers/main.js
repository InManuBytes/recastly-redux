import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

// NOTE. ROOTREDUCER WAS ORIGINALLY AN ANONYMOUS FUNCTION. WE CHANGED IT TO ASSIGN TO A VALUE OF COMBINEREDUCERS
var rootReducer = combineReducers({currentVideo: currentVideoReducer, videoList: videoListReducer})

  // const previousVideos = state.videoList
  // const newState = {};
  // newState.currentVideo = action.video;
  // newState.videos = previousVideos;
  // return newState

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
