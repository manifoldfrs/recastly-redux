import React from 'react';
import videoListReducer from "../reducers/videoList";

// Grab Creator, Number of Views, and Date posted
// On hover, show full description for video player


var VideoDetails = ({video}) => (
  <div>
    <div>{video.snippet.channelTitle}</div>
    <div>{new Date(video.snippet.publishedAt).toDateString()}</div>
    <div></div>
  </div>
);

export default VideoDetails;



//instantiate video details and pass a video into prop