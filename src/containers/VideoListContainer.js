import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapVideoStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};

const videoListProps = {
  handleVideoListEntryTitleClick: changeVideo
};

const VideoListContainer = connect(mapVideoStateToProps, videoListProps)(VideoList);

export default VideoListContainer;
