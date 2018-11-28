import { connect } from "react-redux";

import AppBar from "../presentational/app-bar/AppBar";
import { searchTodo } from '../../actions/search';


const mapStateToProps = state => {
  return {
    text: state.searchText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchTodo: e => dispatch(searchTodo(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);
