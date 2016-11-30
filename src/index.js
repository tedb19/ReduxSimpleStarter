import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDBtvKWTsR-k72Uf16U_Yeb2b4wMfDYtmo';

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
              <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
