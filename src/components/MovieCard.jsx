import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import favoritesStore from "../stores/FavoritesStore";

const MovieCard = ({ movie }) => {
  const handleAddFavorite = () => {
    favoritesStore.addFavorite(movie);
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-card-content">
        <Typography variant="h6">{movie.Title} ({movie.Year})</Typography>
        <Button variant="contained" color="primary" onClick={handleAddFavorite}>
          Add to Favorites
        </Button>
        <Link to={`/movie/${movie.imdbID}`}>
          <Button variant="outlined" color="secondary" style={{ marginTop: "10px" }}>
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
