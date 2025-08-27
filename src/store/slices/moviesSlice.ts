import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
}

interface MoviesState {
  trending: Movie[];
  netflixOriginals: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  searchResults: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  trending: [],
  netflixOriginals: [],
  topRated: [],
  actionMovies: [],
  comedyMovies: [],
  horrorMovies: [],
  romanceMovies: [],
  documentaries: [],
  searchResults: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<{ category: keyof MoviesState; movies: Movie[] }>) => {
      const { category, movies } = action.payload;
      if (category !== 'isLoading' && category !== 'error') {
        state[category] = movies;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Movie[]>) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setMovies, setLoading, setError, setSearchResults } = moviesSlice.actions;
export default moviesSlice.reducer;