import React from "react";
import { MovieCard } from "../MovieCard/MovieCard"
import "./MovieList.scss";

export const MovieList = () => {
  return (
    <div className="movie-list">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </div>);
};
