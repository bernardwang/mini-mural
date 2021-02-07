import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class Announcer extends React.Component {
  static propTypes = {
    status: PropTypes.arrayOf(PropTypes.string),
    dequeueStatus: PropTypes.func
  };

  // TODO: Automatically dequeue status after a new status is detected and announced using componentDidUpdate
  render() {
    const { status = [] } = this.props;
    return (
      <div role="region" aria-live="polite" className="visually-hidden">
        {status.length > 0 ? status[0] : ""}
      </div>
    );
  }
}

export default Announcer;
