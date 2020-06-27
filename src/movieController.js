import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", { pageTitle: "home", movies });
};
export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  console.log(movie);
  res.render("detail", { pageTitle: "movie", movie });
};
export const filterMovie = (req, res) => {
  const {
    query: { year }
  } = req;
  const movies = getMovieByMinimumYear(year);
  res.render("movies", { pageTitle: "search result", year, movies });
};
