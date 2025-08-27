import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import './Header.scss';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__left">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />
        <nav className="header__nav">
          <a href="#home" className="header__nav-link header__nav-link--active">Home</a>
          <a href="#tv-shows" className="header__nav-link">TV Shows</a>
          <a href="#movies" className="header__nav-link">Movies</a>
          <a href="#new-popular" className="header__nav-link">New & Popular</a>
          <a href="#my-list" className="header__nav-link">My List</a>
        </nav>
      </div>
      <div className="header__right">
        <div className="header__search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.5776 16.5772C13.3123 17.4749 11.7275 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.7275 17.4749 13.3123 16.5772 14.5776L21.7071 19.7071C22.0976 20.0976 22.0976 20.7308 21.7071 21.1213C21.3166 21.5118 20.6834 21.5118 20.2929 21.1213L15.1631 15.9915L14.5776 16.5772ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="currentColor" />
          </svg>
        </div>
        <div className="header__profile">
          <img
            className="header__avatar"
            src={currentUser?.avatar || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
            alt="Profile"
          />
          <div className="header__dropdown">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.5303 6.46967C11.8232 6.76256 11.8232 7.23744 11.5303 7.53033L8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303L4.46967 7.53033C4.17678 7.23744 4.17678 6.76256 4.46967 6.46967C4.76256 6.17678 5.23744 6.17678 5.53033 6.46967L8 8.93934L10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;