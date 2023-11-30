import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '0c8681096739e4a460f088ce3d19cd4a',
};

export const getTrendingFilms = async () => {
  const { data } = await axios(`/trending/movie/week`);
  return data;
};

export const getMovieBySearch = async (query, page) => {
  const { data } = await axios(`/search/movie?query=${query}&page=${page}`);
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios(`/movie/${movieId}`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`);
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`);
  return data;
};
