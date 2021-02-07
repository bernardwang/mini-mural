import { connect } from "react-redux";
import BoardNavigation from "./BoardNavigation";

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, null)(BoardNavigation);
