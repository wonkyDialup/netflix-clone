import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setMovies, setLoading } from './store/slices/moviesSlice';
import {
  fetchTrendingMovies,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries
} from './services/api';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import MovieRow from './components/MovieRow/MovieRow';
import Footer from './components/Footer/Footer';
import MovieModal from './components/MovieModal/MovieModal';
import { Movie } from './store/slices/moviesSlice';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      dispatch(setLoading(true));
      
      try {
        const [
          trending,
          netflixOriginals,
          topRated,
          actionMovies,
          comedyMovies,
          horrorMovies,
          romanceMovies,
          documentaries
        ] = await Promise.all([
          fetchTrendingMovies(),
          fetchNetflixOriginals(),
          fetchTopRated(),
          fetchActionMovies(),
          fetchComedyMovies(),
          fetchHorrorMovies(),
          fetchRomanceMovies(),
          fetchDocumentaries()
        ]);

        dispatch(setMovies({ category: 'trending', movies: trending }));
        dispatch(setMovies({ category: 'netflixOriginals', movies: netflixOriginals }));
        dispatch(setMovies({ category: 'topRated', movies: topRated }));
        dispatch(setMovies({ category: 'actionMovies', movies: actionMovies }));
        dispatch(setMovies({ category: 'comedyMovies', movies: comedyMovies }));
        dispatch(setMovies({ category: 'horrorMovies', movies: horrorMovies }));
        dispatch(setMovies({ category: 'romanceMovies', movies: romanceMovies }));
        dispatch(setMovies({ category: 'documentaries', movies: documentaries }));
      } catch (error) {
        console.error('Error loading movies:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadMovies();
  }, [dispatch]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  if (movies.isLoading) {
    return (
      <div className="app">
        <div className="loading">
          <div className="loading__spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      
      {movies.netflixOriginals.length > 0 && (
        <HeroBanner movie={movies.netflixOriginals[0]} />
      )}

      <div className="app__rows">
        {movies.netflixOriginals.length > 0 && (
          <MovieRow title="NETFLIX ORIGINALS" movies={movies.netflixOriginals} isLargeRow onMovieClick={handleMovieClick} />
        )}
        
        {movies.trending.length > 0 && (
          <MovieRow title="Trending Now" movies={movies.trending} onMovieClick={handleMovieClick} />
        )}
        
        {movies.topRated.length > 0 && (
          <MovieRow title="Top Rated" movies={movies.topRated} onMovieClick={handleMovieClick} />
        )}
        
        {movies.actionMovies.length > 0 && (
          <MovieRow title="Action Movies" movies={movies.actionMovies} onMovieClick={handleMovieClick} />
        )}
        
        {movies.comedyMovies.length > 0 && (
          <MovieRow title="Comedy Movies" movies={movies.comedyMovies} onMovieClick={handleMovieClick} />
        )}
        
        {movies.horrorMovies.length > 0 && (
          <MovieRow title="Horror Movies" movies={movies.horrorMovies} onMovieClick={handleMovieClick} />
        )}
        
        {movies.romanceMovies.length > 0 && (
          <MovieRow title="Romance Movies" movies={movies.romanceMovies} onMovieClick={handleMovieClick} />
        )}
        
        {movies.documentaries.length > 0 && (
          <MovieRow title="Documentaries" movies={movies.documentaries} onMovieClick={handleMovieClick} />
        )}
      </div>

      <Footer />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
