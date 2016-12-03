import React from 'react';

/*
  Instead of having props as an arg, then
  doing video = props.video, we can just
  put in an object as we've done below.
*/
const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    /*
      for the url, instead of concatenating using +,
      we can use an ES6 syntactic sugar with the backticks.
    */
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className='col-md-8 video-detail'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' src={url}></iframe>
        </div>
        <div className='details'>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
};

export default VideoDetail;
