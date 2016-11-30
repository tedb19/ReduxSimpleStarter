import React, { Component } from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        /*
          When returning an array of list items, you must
          provide a key, which is a unique value for each list items.
          The key enables react to perform updates much faster.
          If no key is provided, react would re-render the list
        */
        return <VideoListItem key={video.etag} video={video}/>
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
}

export default VideoList;
