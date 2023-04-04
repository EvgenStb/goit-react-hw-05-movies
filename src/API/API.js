
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '5958816911537cfdf50af62921dcbcdb';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

async function dayTopMovies() {
    const data = await fetch(
        `${BASE_URL}trending/movie/day?api_key=${KEY}`
        );
    const topMoviesDay = data.json();
    return topMoviesDay
}

async function searchMovies(request) {
    const data = await fetch(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${request}=1&include_adult=false`
    );
    const response = data.json()
    return response;
}

async function getMovieDatails (movieId) {
    const data = await fetch(
      `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    const movieDetails = data.json();
    return movieDetails;
}
async function getMovieCasts (movieId) {
    const data = await fetch (`
    ${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US
    `)
    const cast = data.json();
    return cast
}

async function getMovieReviews(movieId) {
  const data = await fetch(`
    ${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1
    `);
    const reviews = data.json();
    return reviews;
}

// async function getMoviePoster()

export {
  IMG_BASE_URL,
  dayTopMovies,
  searchMovies,
  getMovieDatails,
  getMovieCasts,
  getMovieReviews,
};

