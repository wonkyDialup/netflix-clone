import { Movie } from '../store/slices/moviesSlice';
import { mockMovies, getMoviesByCategory } from '../data/mockData';

const API_DELAY = 500;

const simulateApiCall = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, API_DELAY);
  });
};

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  return simulateApiCall(getMoviesByCategory('trending'));
};

export const fetchNetflixOriginals = async (): Promise<Movie[]> => {
  return simulateApiCall(getMoviesByCategory('netflixOriginals'));
};

export const fetchTopRated = async (): Promise<Movie[]> => {
  return simulateApiCall(getMoviesByCategory('topRated'));
};

export const fetchActionMovies = async (): Promise<Movie[]> => {
  return simulateApiCall(getMoviesByCategory('actionMovies'));
};

export const fetchComedyMovies = async (): Promise<Movie[]> => {
  return simulateApiCall(getMoviesByCategory('comedyMovies'));
};

export const fetchHorrorMovies = async (): Promise<Movie[]> => {
  return simulateApiCall(getMoviesByCategory('horrorMovies'));
};

export const fetchRomanceMovies = async (): Promise<Movie[]> => {
  return simulateApiCall(getMoviesByCategory('romanceMovies'));
};

export const fetchDocumentaries = async (): Promise<Movie[]> => {
  return simulateApiCall(getMoviesByCategory('documentaries'));
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const filteredMovies = mockMovies.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.overview.toLowerCase().includes(query.toLowerCase())
  );
  return simulateApiCall(filteredMovies);
};

export const fetchMovieById = async (id: number): Promise<Movie | undefined> => {
  const movie = mockMovies.find(movie => movie.id === id);
  return simulateApiCall(movie);
};