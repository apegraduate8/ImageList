import React from 'react';
import Unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchsubmit = async (term) => {
      const response = await Unsplash.get('/search/photos', {
            params: { query: term }
        });

      this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '50px' }}>
             <SearchBar onSubmit={this.onSearchsubmit}/>
             <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
