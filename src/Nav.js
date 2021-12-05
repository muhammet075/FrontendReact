import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/nederland'>
          <li>Nederland</li>
        </Link>
        <Link to='/grafiek'>
          <li>Grafiek</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
