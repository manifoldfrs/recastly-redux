import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapCurrentVideoToProps = (state) => {
  return {
    video: state.currentVideo
  };
};

const VideoPlayerContainer = connect(mapCurrentVideoToProps)(VideoPlayer);

export default VideoPlayerContainer;
