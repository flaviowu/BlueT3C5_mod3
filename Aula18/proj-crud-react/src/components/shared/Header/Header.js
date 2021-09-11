import React from "react";
import { Link } from "react-router-dom"
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list-item">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li className="header-list-item">
          <Link to="/addMovie" style={{ color: "black", textDecoration: "none" }}>
            Adicionar
          </Link>
        </li>
      </ul>
    </header>
  );
};
