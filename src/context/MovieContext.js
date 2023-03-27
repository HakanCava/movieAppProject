import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  console.log(movies);
  const values = { movies,loading,getMovies };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieContextProvider;
