import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "28.11.2018",
      text: "",
      description: "",
      priority: false
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div id="todo-form">
        <InputBase
          name="time"
          placeholder="Time"
          onChange={e => this.handleChange(e)}
        />
        <InputBase
          name="text"
          placeholder="Text"
          onChange={e => this.handleChange(e)}
        />
        <InputBase
          name="description"
          placeholder="Description"
          label="Description"
          onChange={e => this.handleChange(e)}
        />
        <Button onClick={this.props.addTodo}>Creat</Button>
      </div>
    );
  }
}

export default TodoForm;
