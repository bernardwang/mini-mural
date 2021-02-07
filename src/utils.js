import { COLOR_PICKER_NAMES } from "./constants";

const pixelsToInt = pixels => {
  return parseInt(pixels.replace("px", ""), 10);
};

const translateNotes = (notes, toTranslate = 0) => {
  return notes.map(note => {
    const x =
      parseInt(note.x, 10) +
      (parseInt(toTranslate, 10) || parseInt(note.width, 10));

    const y =
      parseInt(note.y, 10) +
      (parseInt(toTranslate, 10) || parseInt(note.height, 10));

    return { ...note, x, y };
  });
};

const getNoteSummary = (color, text = "") => {
  const maxWords = 5;
  const words = text.split(" ");

  // Cut off long text to provide a shorter, more scannable summary
  const shortenText = words.length > maxWords;
  if (shortenText) {
    words.length = maxWords;
  }
  const summary = words.join(" ").concat(shortenText ? "..." : "");

  // Get accessible color name
  // TODO: Handle undefined color name better
  const colorName = COLOR_PICKER_NAMES[color];
  const noteType = colorName ? `${colorName} Note` : `Note with color ${color}`;

  const emptyNote = text.length === 0;
  return emptyNote ? `Empty ${noteType}` : `${noteType}: ${summary}`;
};

export { translateNotes, pixelsToInt, getNoteSummary };
