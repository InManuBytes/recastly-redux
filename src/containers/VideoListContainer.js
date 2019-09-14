import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var mapStateToProps = (state) => {
  //To see the current state uncomment line below
  //console.log('mapStateToProps VideoList', state);
  return {
    videos: state.videoList
  };
};

var mapDispatchToProps = (dispatch) => {
  // since the handleVideo...Click is a function that takes in a video
  // we have to make sure it looks the same passed down
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);


export default VideoListContainer;
