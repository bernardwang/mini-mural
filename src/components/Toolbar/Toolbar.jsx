import React from "react";
import ClipboardManager from "../ClipboardManager";
import ColorPicker from "./ColorPicker";
import "./styles.css";

class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar" id="toolbar" tabIndex="-1">
        <ColorPicker />
        <ClipboardManager />
      </div>
    );
  }
}

export default Toolbar;
