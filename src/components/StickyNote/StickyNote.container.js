import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StickyNote from "./StickyNote";
import { setSelectedNote, pushSelectedNote } from "../../actions/mural-actions";
import { deleteNote, updateNote } from "../../actions/notes-actions";
import { enqueueStatus } from "../../actions/status-actions";

const mapStateToProps = state => {
  return {
    notes: state.notes,
    multipleSelection: state.mural.multipleSelection
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setSelectedNote,
      pushSelectedNote,
      updateNote,
      deleteNote,
      enqueueStatus
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StickyNote);
