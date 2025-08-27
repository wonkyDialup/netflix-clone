import React from 'react';
import { Movie } from '../../store/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addToMyList, removeFromMyList } from '../../store/slices/userSlice';
import './HeroBanner.scss';

interface HeroBannerProps {
  movie: Movie;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const { myList } = useAppSelector((state) => state.user);
  const isInMyList = myList.includes(movie.id);

  const handleMyListToggle = () => {
    if (isInMyList) {
      dispatch(removeFromMyList(movie.id));
    } else {
      dispatch(addToMyList(movie.id));
    }
  };

  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    }
    return str;
  };

  return (
    <header
      className="hero-banner"
      style={{
        backgroundImage: `url(${movie.backdrop_path})`,
      }}
    >
      <div className="hero-banner__contents">
        <h1 className="hero-banner__title">{movie.title}</h1>
        <div className="hero-banner__buttons">
          <button className="hero-banner__button hero-banner__button--play">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
            </svg>
            Play
          </button>
          <button 
            className="hero-banner__button hero-banner__button--info"
            onClick={handleMyListToggle}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            </svg>
            {isInMyList ? 'Remove from My List' : 'My List'}
          </button>
        </div>
        <h1 className="hero-banner__description">
          {truncateString(movie.overview, 150)}
        </h1>
      </div>
      <div className="hero-banner__fade-bottom" />
    </header>
  );
};

export default HeroBanner;