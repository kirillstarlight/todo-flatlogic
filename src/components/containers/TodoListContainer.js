import { connect } from "react-redux";

import TodoList from "../presentational/todo-list/TodoList.js";

const mapStateToProps = state => {
  return {
    cards: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
