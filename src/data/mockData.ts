import { Movie } from '../store/slices/moviesSlice';

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    backdrop_path: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
    release_date: "2016-07-15",
    vote_average: 8.7,
    genre_ids: [18, 10765, 9648],
    adult: false,
    original_language: "en"
  },
  {
    id: 2,
    title: "The Witcher",
    overview: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    backdrop_path: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
    release_date: "2019-12-20",
    vote_average: 8.2,
    genre_ids: [18, 10765, 10759],
    adult: false,
    original_language: "en"
  },
  {
    id: 3,
    title: "Money Heist",
    overview: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    backdrop_path: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=450&fit=crop",
    release_date: "2017-05-02",
    vote_average: 8.3,
    genre_ids: [80, 18],
    adult: false,
    original_language: "es"
  },
  {
    id: 4,
    title: "The Queen's Gambit",
    overview: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    backdrop_path: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=300&h=450&fit=crop",
    release_date: "2020-10-23",
    vote_average: 8.5,
    genre_ids: [18],
    adult: false,
    original_language: "en"
  },
  {
    id: 5,
    title: "Bridgerton",
    overview: "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
    backdrop_path: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=450&fit=crop",
    release_date: "2020-12-25",
    vote_average: 7.3,
    genre_ids: [18, 10749],
    adult: false,
    original_language: "en"
  },
  {
    id: 6,
    title: "Ozark",
    overview: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a Mexican drug cartel.",
    backdrop_path: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=300&h=450&fit=crop",
    release_date: "2017-07-21",
    vote_average: 8.4,
    genre_ids: [80, 18],
    adult: false,
    original_language: "en"
  },
  {
    id: 7,
    title: "House of Cards",
    overview: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
    backdrop_path: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=450&fit=crop",
    release_date: "2013-02-01",
    vote_average: 8.0,
    genre_ids: [18],
    adult: false,
    original_language: "en"
  },
  {
    id: 8,
    title: "The Crown",
    overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    backdrop_path: "https://images.unsplash.com/photo-1535491195547-b5eb87618e5b?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1535491195547-b5eb87618e5b?w=300&h=450&fit=crop",
    release_date: "2016-11-04",
    vote_average: 8.6,
    genre_ids: [18, 36],
    adult: false,
    original_language: "en"
  },
  {
    id: 9,
    title: "Black Mirror",
    overview: "An anthology series exploring a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
    backdrop_path: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop",
    release_date: "2011-12-04",
    vote_average: 8.4,
    genre_ids: [18, 878, 53],
    adult: false,
    original_language: "en"
  },
  {
    id: 10,
    title: "Narcos",
    overview: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.",
    backdrop_path: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop",
    release_date: "2015-08-28",
    vote_average: 8.1,
    genre_ids: [80, 18],
    adult: false,
    original_language: "en"
  },
  {
    id: 11,
    title: "Dark",
    overview: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
    backdrop_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
    release_date: "2017-12-01",
    vote_average: 8.8,
    genre_ids: [80, 18, 9648, 878, 53],
    adult: false,
    original_language: "de"
  },
  {
    id: 12,
    title: "Orange Is the New Black",
    overview: "A privileged New Yorker ends up in a women's prison when a past crime catches up with her in this Emmy-winning series.",
    backdrop_path: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=675&fit=crop",
    poster_path: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop",
    release_date: "2013-07-11",
    vote_average: 7.9,
    genre_ids: [35, 80, 18],
    adult: false,
    original_language: "en"
  }
];

export const movieCategories = {
  trending: [1, 2, 3, 4],
  netflixOriginals: [1, 2, 4, 5, 6, 7, 8, 12],
  topRated: [4, 8, 11, 1, 9],
  actionMovies: [2, 3, 10],
  comedyMovies: [5, 12],
  horrorMovies: [1, 9],
  romanceMovies: [4, 5],
  documentaries: [8, 10],
};

export const getMoviesByCategory = (category: keyof typeof movieCategories): Movie[] => {
  const movieIds = movieCategories[category];
  return mockMovies.filter(movie => movieIds.includes(movie.id));
};