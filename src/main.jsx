import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FilteredMovieContextProvider, MovieContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieContextProvider>
      <FilteredMovieContextProvider>
        <App />
      </FilteredMovieContextProvider>
    </MovieContextProvider>
  </React.StrictMode>,
);
