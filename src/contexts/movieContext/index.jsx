import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../data/methods";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [languageList, setLanguageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log({ isLoading, movieData });

  const fetchAndSetMoviesData = async () => {
    const movies = await api.getMovies();
    setIsLoading(false);
    setMovieData(movies.moviesData);
    setLanguageList(movies.languageList);
    console.log({ movies });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAndSetMoviesData();
  }, []);

  return (
    <MovieContext.Provider value={{ movieData, languageList, isLoading }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
