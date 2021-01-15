import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const movies = await axios.get(
            'https://yts-proxy.now.sh/list_movies.json'
        );
    };
    async componentDidMount() {
        this.getMovies();
    }
    render() {
        return <div>{this.state.isLoading ? 'loading' : 'we are ready'}</div>;
    }
}
export default App;

// "https://yts-proxy.now.sh/list_movies.json"
