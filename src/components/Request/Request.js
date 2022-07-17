export const Api_key = import.meta.env.VITE_API__KEY;

export default {
  fetchTrending: `/trending/all/week?language=en-US`,
  fetchTopRated: "/movie/top_rated?&language=en-US",
  fetchActionMovies: "/discover/movie?&with_genres=28",
  fetchComedyMovies: "/discover/movie?&with_genres=35",
  fetchHorrorMovies: "/discover/movie?&with_genres=27",
  fetchRomanceMovies: "/discover/movie?&width_genres=27",
  fetchMystery: "/discover/movie?&with_genres=9648",
  fetchSciFi: "/discover/movie?&with_genres=878",
  fetchWestern: "/discover/movie?&with_genres=37",
  fetchAnimation: "/discover/movie?&width_genres=16",
  fetchTV: "/discover/movie?&with_genres=10770",
  
};
