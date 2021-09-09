import React from "react";
import { MovieList } from "../../components/structure/MovieList/MovieList";
import "./Home.scss";

export const Home = () => {
  return (
    <section className="container">
      <h1 className="content-title">Página Inicial | Listagem de Filmes</h1>
      <div className="content-list">
        <MovieList />
      </div>
    </section>
  );
};
