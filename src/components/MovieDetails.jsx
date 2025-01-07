import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import moviesStore from "../stores/MoviesStore";
import { useParams } from "react-router-dom";

const MovieDetails = observer(() => {
  const { imdbID } = useParams();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); 

  useEffect(() => {
    moviesStore.fetchMovieDetails(imdbID);
  }, [imdbID]);

  const movie = moviesStore.selectedMovie;


  useEffect(() => {
    if (movie) {

      setTrailerUrl(movie.TrailerUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ");
      setLoading(false);
    }
  }, [movie]);

  return (
    <div className="container">
      {movie ? (
        <div className="movie-details-container">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-details">
            <h2>
              {movie.Title} ({movie.Year})
            </h2>
            <p>
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Rating:</strong> {movie.imdbRating}
            </p>
          </div>
        </div>
      ) : (
        <p className="loader">Loading movie details...</p>
      )}
      <div className="movie-trailer">
        <h3>Watch Trailer</h3>
        {loading ? (
          <p>Loading trailer...</p>
        ) : error ? (
          <p>{error}</p>
        ) : trailerUrl ? (
          <iframe
            width="100%"
            height="400"
            src={trailerUrl}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available.</p>
        )}
      </div>
    </div>
  );
});

export default MovieDetails;
