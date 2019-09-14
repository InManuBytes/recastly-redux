var changeVideoList = (videos) => ({
  //Returns some action object to change the list of videos in VideoList.
  type: 'CHANGE_VIDEO_LIST',
  videos: videos
});

export default changeVideoList;
