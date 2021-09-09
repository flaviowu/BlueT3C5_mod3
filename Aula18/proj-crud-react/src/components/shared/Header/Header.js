import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list-item">
          <a className="header-list-item-link" href="/">
            Home
          </a>
        </li>
        <li className="header-list-item">
          <a className="header-list-item-link" href="/addMovie">
            Adicionar
          </a>
        </li>
      </ul>
    </header>
  );
};
