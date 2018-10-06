var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.

  type: 'Video_is_changed',
  currentVideo: video
});

export default changeVideo;
