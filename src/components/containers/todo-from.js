import TodoForm from "../presentational/todo-form/TodoForm";

const mapStateToProps = state => ({
  text: state.text,
  description: state.description,
  time: state.time,
  priority: state.priority
});

const mapDispatchToProps = {
  addTodo: (state)=>dispatch(addTodo(state))
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
