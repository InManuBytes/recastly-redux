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

var mapDispatchToProps = (dispatch, video) => {
  //To see the video being passed down uncomment line below
  //console.log('mapDispatch VideoList VIDEO:', video);
  return {
    handleVideoListEntryTitleClick: () => dispatch(changeVideo(video))
  };
};

var VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);


export default VideoListContainer;
