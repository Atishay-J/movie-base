import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../data/methods";

const MovieContext =createContext();


export const MovieContextProvider = ({children}) => {
    const [movieData,setMovieData] = useState({});

    
const fetchAndSetMoviesData =async () =>{
   const movies = await api.getMovies();
   setMovieData(movies)
   console.log({movies})
}

    useEffect(()=>{
        fetchAndSetMoviesData();
    },[])

    return <MovieContext.Provider value={movieData}>{children}</MovieContext.Provider>
}


export const useMovieContext = () =>{
    return useContext(MovieContext)
}