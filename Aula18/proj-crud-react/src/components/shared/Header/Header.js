import React from "react";
import { Link } from "react-router-dom"
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list-item">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="header-list-item">
          <Link to="/addMovie">
            Adicionar
          </Link>
        </li>
      </ul>
    </header>
  );
};
