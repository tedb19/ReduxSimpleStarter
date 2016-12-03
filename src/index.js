import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDwcZisevvrM55ojag5jy9HoD1aKfaCoGM';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
            /**
              { videos } gets transpiled to { videos: videos }
              only works when both key & value have same names
              this is an ES6 syntactic sugar
            */
            this.setState({ videos });
        });

    }

    render() {
        return (
            <div>
              <SearchBar />
              <VideoDetail video={this.state.videos[0]} />
              <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
