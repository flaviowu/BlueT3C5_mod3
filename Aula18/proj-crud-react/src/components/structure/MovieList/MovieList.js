import React, { useState, useEffect } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieList.scss";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const url = "http://localhost:3005/filmes";

  const getMovie = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);
    setMovies(data);
  };

  return (
    <div className="movie-list">
      {movies.map( movie => (
        <MovieCard key={movie._id} movie={movie}/>
      ))}
    </div>
  );
};
