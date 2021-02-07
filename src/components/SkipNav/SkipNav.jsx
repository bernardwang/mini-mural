import React from "react";
import "./styles.css";

function SkipNav() {
  return (
    // TODO: Consider skipping to #board instead of main
    <a className="SkipNav" href="#main">
      {"Skip to main content"}
    </a>
  );
}

export default SkipNav;
