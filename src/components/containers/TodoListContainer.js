import { connect } from "react-redux";

import TodoList from "../presentational/todo-list/TodoList.js";
import {completeTodo, changePriority, deleteTodo} from "../../actions/todo";

const mapStateToProps = state => {
  return {
    cards: state.todo,
    searchText: state.search.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePriority: (id) => dispatch(changePriority(id)),
    completeTodo: (id) => dispatch(completeTodo(id)),
    deleteTodo:(id)=>dispatch(deleteTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
