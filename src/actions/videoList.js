var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: 'Video_List_has_Changed',
  videos: videos
});

export default changeVideoList;
