import React from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom"; 
import favoritesStore from "../stores/FavoritesStore";
import { WiStars } from "react-icons/wi";


const FavoritesPage = observer(() => {
  const favoriteMovies = favoritesStore.favorites;
  const navigate = useNavigate(); 

  const handleRemoveFavorite = (imdbID) => {
    favoritesStore.removeFavorite(imdbID);
  };

  const handleViewDetails = (imdbID) => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="favorites-page">
      <h2>Favorites<WiStars style={{color:"green"}}/></h2>
      {favoriteMovies.length > 0 ? (
        <div className="movie-card-container">
          {favoriteMovies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <div className="button-container">
                <button onClick={() => handleRemoveFavorite(movie.imdbID)}>
                  Remove from Favorites
                </button>
                <button style={{ marginTop: "10px" }} onClick={() => handleViewDetails(movie.imdbID)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites added yet!</p>
      )}
    </div>
  );
});

export default FavoritesPage;
