import React, { useRef, useState } from 'react';
import { Movie } from '../../store/slices/moviesSlice';
import './MovieRow.scss';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
  onMovieClick?: (movie: Movie) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies, isLargeRow = false, onMovieClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="movie-row">
      <h2 className="movie-row__title">{title}</h2>
      <div className="movie-row__container">
        <div 
          className={`movie-row__arrow movie-row__arrow--left ${isMoved && 'movie-row__arrow--visible'}`}
          onClick={() => handleClick('left')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
          </svg>
        </div>
        
        <div ref={rowRef} className="movie-row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`movie-row__poster ${isLargeRow && 'movie-row__poster--large'}`}
              src={isLargeRow ? movie.poster_path : movie.poster_path}
              alt={movie.title}
              loading="lazy"
              onClick={() => onMovieClick && onMovieClick(movie)}
            />
          ))}
        </div>
        
        <div 
          className="movie-row__arrow movie-row__arrow--right movie-row__arrow--visible"
          onClick={() => handleClick('right')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;