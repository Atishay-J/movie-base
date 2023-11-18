import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../data/methods";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [languageList, setLanguageList] = useState([]);

  const fetchAndSetMoviesData = async () => {
    const movies = await api.getMovies();
    setMovieData(movies.moviesData);
    setLanguageList(movies.languageList);
    console.log({ movies });
  };

  useEffect(() => {
    fetchAndSetMoviesData();
  }, []);

  return (
    <MovieContext.Provider value={{ movieData, languageList }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
