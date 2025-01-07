import { makeAutoObservable } from "mobx";

class FavoritesStore {
  favorites = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFavorite(movie) {
    this.favorites.push(movie);
  }

  removeFavorite(imdbID) {
    this.favorites = this.favorites.filter((movie) => movie.imdbID !== imdbID);
  }
}

const favoritesStore = new FavoritesStore();
export default favoritesStore;
