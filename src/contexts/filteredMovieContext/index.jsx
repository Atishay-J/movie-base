import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useMovieContext } from "../movieContext";

const FilteredMovieContext = createContext();

const movieReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "SET_SELECTED_LANGUAGES":
      return { ...state, selectedLanguages: action.payload };
    case "SET_SELECTED_GENRE":
      return { ...state, selectedGenre: action.payload };
    default:
      return state;
  }
};

const movieReducerInitState = { selectedLanguages: [], selectedGenre: [] };

export const FilteredMovieContextProvider = ({ children }) => {
  const { movieData } = useMovieContext();
  const movieEntries = Object.values(movieData);
  const [state, dispatch] = useReducer(movieReducer, movieReducerInitState);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { selectedLanguages, selectedGenre } = state;
  const totalNumberOfMovies = movieEntries.length;
  const totalNumberOfSelectedLanguages = selectedLanguages.length;
  const totalNumberOfSelectedGeneres = selectedGenre.length;

  const updateMovieState = () => {
    let filteredMovies = [...movieEntries];

    if (selectedLanguages.length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        selectedLanguages.includes(movie.EventLanguage),
      );
    }

    if (selectedGenre.length > 0) {
      filteredMovies = filteredMovies.filter((movie) => {
        const movieGenres = movie.EventGenre.split("|");
        return selectedGenre.some((genre) => movieGenres.includes(genre));
      });
    }

    setFilteredMovies(filteredMovies);
  };

  console.log({ movieEntries });
  useEffect(() => {
    // setFilteredMovies(movieEntries);
    updateMovieState();
  }, [
    totalNumberOfMovies,
    totalNumberOfSelectedGeneres,
    totalNumberOfSelectedLanguages,
  ]);

  return (
    <FilteredMovieContext.Provider
      value={{
        filteredMovies,
        dispatch,
      }}
    >
      {children}
    </FilteredMovieContext.Provider>
  );
};

export const useFilteredMovies = () => {
  return useContext(FilteredMovieContext);
};
