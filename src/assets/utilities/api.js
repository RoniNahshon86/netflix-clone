const API_BASE_URL = "https://api.themoviedb.org/3";

const getHeaders = () => {
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
  );
  headers.append("accept", "application/json");
  return headers;
};

const fetchFromAPI = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "GET",
    headers: getHeaders(),
    redirect: "follow",
  });
  return response.json();
};

export const getTopRatedMovies = (page = 1) => {
  return fetchFromAPI(`/movie/top_rated?language=en-US&page=${page}`);
};

export const getPopularMovies = (page = 1) => {
  return fetchFromAPI(`/movie/popular?language=en-US&page=${page}`);
};

export const getNowPlayingMovies = (page = 1) => {
  return fetchFromAPI(`/movie/now_playing?language=en-US&page=${page}`);
};

export const getUpcomingMovies = (page = 1) => {
  return fetchFromAPI(`/movie/upcoming?language=en-US&page=${page}`);
};

export const getMovieDetails = (movieId) => {
  return fetchFromAPI(
    `/movie/${movieId}?language=en-US&append_to_response=credits,images,videos`
  );
};

export const getMovieVideos = (movieId) => {
  return fetchFromAPI(`/movie/${movieId}/videos`);
};

export const searchMovies = (query) => {
  return fetchFromAPI(
    `/search/movie?language=en-US&query=${encodeURIComponent(query)}&page=1`
  );
};
