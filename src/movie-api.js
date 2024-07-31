import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDNiZTg2NzM0ZTk1ZTFjYmY0Y2RhYzJkOTNkMmNkZCIsIm5iZiI6MTcyMDk3ODE0Mi4yNTU1NzgsInN1YiI6IjY2OTE4NGMwOWE4YWIwNGU4ODAyMzY5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.luhEo_MNzE0_LlAy5a8Gjx17pyX75XxrHyH7AQ0yDAs`;
axios.defaults.params = {
    api_key: "bd3be86734e95e1cbf4cdac2d93d2cdc"
};
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const IMAGE_SIZE = 'w500';

export const getTrendingMovies = async () => {
    const response = await axios.get('/trending/movie/day');
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get('/search/movie', { params: { query } });
    return response.data.results;
};

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
};

export const getImageUrl = (filePath) => {
    return `${IMAGE_BASE_URL}/${IMAGE_SIZE}${filePath}`;
};



