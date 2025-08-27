import React from 'react';
import { Movie } from '../../store/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addToMyList, removeFromMyList } from '../../store/slices/userSlice';
import './MovieModal.scss';

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  const dispatch = useAppDispatch();
  const { myList } = useAppSelector((state) => state.user);

  if (!movie) return null;

  const isInMyList = myList.includes(movie.id);

  const handleMyListToggle = () => {
    if (isInMyList) {
      dispatch(removeFromMyList(movie.id));
    } else {
      dispatch(addToMyList(movie.id));
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="movie-modal" onClick={handleBackdropClick}>
      <div className="movie-modal__content">
        <button className="movie-modal__close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
          </svg>
        </button>
        
        <div className="movie-modal__hero">
          <img
            src={movie.backdrop_path}
            alt={movie.title}
            className="movie-modal__backdrop"
          />
          <div className="movie-modal__hero-content">
            <h2 className="movie-modal__title">{movie.title}</h2>
            <div className="movie-modal__buttons">
              <button className="movie-modal__button movie-modal__button--play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                </svg>
                Play
              </button>
              <button 
                className="movie-modal__button movie-modal__button--list"
                onClick={handleMyListToggle}
              >
                {isInMyList ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                  </svg>
                )}
              </button>
              <button className="movie-modal__button movie-modal__button--like">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="movie-modal__details">
          <div className="movie-modal__info">
            <div className="movie-modal__metadata">
              <span className="movie-modal__rating">{Math.round(movie.vote_average * 10)}% Match</span>
              <span className="movie-modal__year">{new Date(movie.release_date).getFullYear()}</span>
              <span className="movie-modal__age-rating">18+</span>
              <span className="movie-modal__seasons">1 Season</span>
              <span className="movie-modal__quality">HD</span>
            </div>
            <p className="movie-modal__overview">{movie.overview}</p>
          </div>
          
          <div className="movie-modal__cast">
            <div className="movie-modal__cast-item">
              <span className="movie-modal__cast-label">Cast:</span>
              <span className="movie-modal__cast-value">Sample Cast, Another Actor, Third Person</span>
            </div>
            <div className="movie-modal__cast-item">
              <span className="movie-modal__cast-label">Genres:</span>
              <span className="movie-modal__cast-value">Drama, Thriller, Mystery</span>
            </div>
            <div className="movie-modal__cast-item">
              <span className="movie-modal__cast-label">This movie is:</span>
              <span className="movie-modal__cast-value">Suspenseful, Dark, Psychological</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;