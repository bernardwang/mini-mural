import { connect } from "react-redux";
import Announcer from "./Announcer";
import { bindActionCreators } from "redux";
import { dequeueStatus } from "../../actions/status-actions";

const mapStateToProps = state => {
  return {
    status: state.status
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ dequeueStatus }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Announcer);
