import { connect } from "react-redux";

import TodoForm from "../presentational/todo-form/TodoForm.js";
import { addTodo } from "../../actions/todo";

const mapStateToProps = state => {
  return {
    text: state.text,
    description: state.description,
    time: state.time,
    priority: state.priority
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: state => dispatch(addTodo(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
