import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <h1>Frontend Applications - React</h1>
      <nav>
        <ul>
          <Link to='/'>
            <li>
              <i class='fas fa-home'></i>
            </li>
          </Link>
          <Link to='/nederland'>
            <li>
              <i class='fas fa-city'></i>
            </li>
          </Link>
          <Link to='/grafiek'>
            <li>
              <i class='fas fa-chart-bar'></i>
            </li>
          </Link>
          <li>
            <a
              href='https://github.com/muhammet075/FrontendReact'
              target='_blank'
            >
              <i class='fab fa-github'></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
