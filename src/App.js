import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: { 
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000); 
    // setTimeout 작동하는지 확인
  }
  render(){
    const { isLoading, movies } = this.state; // es6
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="load__text">Loading...</span>
          </div>
          ) : (
            <ul className="movies">
              {movies.map(movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year}
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                />
              ))}
            </ul>
          )}
      </section>
    )
  }
}

export default App;
