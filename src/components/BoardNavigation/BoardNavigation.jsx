import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import "./styles.css";

import { getNoteSummary } from "../../utils";
import { COLOR_PICKER_NAMES } from "../../constants";

class BoardNavigation extends React.Component {
  static propTypes = {
    notes: PropTypes.object
  };

  render() {
    const { notes = {} } = this.props;

    if (isEmpty(notes)) return null;

    const colorMappedNotes = Object.values(notes).reduce((result, note) => {
      if (result[note.color]) {
        result[note.color].push(note);
      } else {
        result[note.color] = [note];
      }
      return result;
    }, {});

    const noteLink = (key, note) => (
      <li key={key}>
        <a href={`#${note.id}`}>{getNoteSummary(note.color, note.text)}</a>
      </li>
    );

    return (
      <nav
        className="BoardNavigation visually-hidden"
        aria-label="Sticky Notes Board Navigation"
      >
        <ul>
          <li>
            <ul aria-label={`All sticky notes`}>
              {// TODO: Organize note links by position (l to r, t to b) or another useful order, rather than going by source order
              Object.values(notes).map((note, index) =>
                noteLink(`${note}-${index}`, note)
              )}
            </ul>
          </li>
          <li>
            {Object.keys(colorMappedNotes).map(color => {
              // TODO: Handle undefined color name better
              const colorName = COLOR_PICKER_NAMES[color] || color;

              // TODO: Avoid using hex color value, map to human readable string
              return (
                <ul
                  key={`${color}-list`}
                  aria-label={`Sticky notes with color: ${colorName}`}
                >
                  {colorMappedNotes[color].map((note, index) =>
                    noteLink(`${color}-${index}`, note)
                  )}
                </ul>
              );
            })}
          </li>
        </ul>
      </nav>
    );
  }
}

export default BoardNavigation;
