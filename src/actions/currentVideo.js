var changeVideo = (video) => ({
  //Returns an action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;
