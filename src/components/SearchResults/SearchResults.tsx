import React from 'react';
import { Movie } from '../../store/slices/moviesSlice';
import MovieRow from '../MovieRow/MovieRow';
import './SearchResults.scss';

interface SearchResultsProps {
  searchQuery: string;
  searchResults: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchQuery, searchResults, onMovieClick }) => {
  if (!searchQuery) return null;

  return (
    <div className="search-results">
      <div className="search-results__content">
        <h2 className="search-results__title">
          Search results for "{searchQuery}"
        </h2>
        {searchResults.length > 0 ? (
          <MovieRow 
            title="" 
            movies={searchResults} 
            onMovieClick={onMovieClick}
          />
        ) : (
          <div className="search-results__no-results">
            <p>No movies found for "{searchQuery}"</p>
            <p>Try searching for something else.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;