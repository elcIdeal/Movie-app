import { makeAutoObservable } from "mobx";
import axios from "axios";

class MoviesStore {
  movies = [];
  selectedMovie = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies(query) {
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=7e59b8de`)
      .then((response) => {
        this.movies = response.data.Search || [];
      });
  }

  fetchMovieDetails(imdbID) {
    axios
      .get(`https://www.omdbapi.com/?i=${imdbID}&apikey=7e59b8de`)
      .then((response) => {
        this.selectedMovie = response.data;
      });
  }
}

const moviesStore = new MoviesStore();
export default moviesStore;
