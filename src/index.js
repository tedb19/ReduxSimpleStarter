import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDBtvKWTsR-k72Uf16U_Yeb2b4wMfDYtmo';

const App = () => {
    return (
        <div>
          <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
