import React from "react";
import classNames from "classnames";
import { isEmpty } from "lodash";
import logo from "./logo.svg";
import "./styles.css";

class Welcome extends React.Component {
  render() {
    const { notes } = this.props;

    const classes = classNames("Welcome", {
      "visually-hidden": !isEmpty(notes)
    });

    // TODO: Find better solution for heading and labeling this section
    return (
      <div className={classes}>
        <h1 id="welcome">
          <img src={logo} className="logo" alt="Sticky Notes Instructions" />
        </h1>
        <div className="instructions">
          <p>
            Add Note: <span className="key">Double Click</span>
          </p>
          <p>
            Edit Note: <span className="key">Click</span>
          </p>
          <p>
            Multiple Selection: <span className="key">Shift</span> +{" "}
            <span className="key">V</span>
          </p>
          <p>
            Copy Notes: <span className="key">Ctrl</span> +{" "}
            <span className="key">C</span>
          </p>
          <p>
            Paste Notes: <span className="key">Ctrl</span> +{" "}
            <span className="key">V</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
