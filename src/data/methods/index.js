import { endpoints } from "../endpoints";

export const api = {
  getMovies: async () => {
    try {
      const response = await fetch(endpoints.getMovies);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error while fetching movie data", err);
    }
  },
};
