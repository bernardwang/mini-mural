import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import "./styles.css";

function Navigation() {
  return (
    <nav className="Navigation visually-hidden" aria-label="Main Navigation">
      <ul>
        <li>
          <a href="#welcome">Instructions</a>
        </li>
        <li>
          <a href="#board">Sticky Notes Board</a>
        </li>
        <li>
          <a href="#toolbar">Toolbar</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
