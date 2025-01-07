import React from "react";
import { observer } from "mobx-react";
import moviesStore from "../stores/MoviesStore";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const HomePage = observer(() => {
  return (
    <div className="container">
      <h1>Movies List</h1>
      <SearchBar />
      <div className="movie-card-container">
        {moviesStore.movies.length > 0 ? (
          moviesStore.movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className="loader">Loading movies...</p>
        )}
      </div>
    </div>
  );
});

export default HomePage;
