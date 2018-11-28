import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "28.11.2018",
      name: "",
      description: "",
      priority: false
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangePriority(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
    return (
      <div id="todo-form">
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <TextField
              name="name"
              placeholder="Name"
              label="Name of todo"
              onChange={e => this.handleChange(e)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="time"
              placeholder="Time"
              label="Deadline time"
              onChange={e => this.handleChange(e)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <TextField
              name="description"
              placeholder="Description"
              label="Description"
              multiline
              onChange={e => this.handleChange(e)}
            />
          </Grid>
          <Grid item xs={6}>
            <Checkbox
              checked={this.props.priority}
              onChange={e => this.handleChangePriority(e)}
              label="Is priority?"
              name="priority"
            />
          </Grid>
        </Grid>
        <Grid container spacing={12} className="create-button">
          <Grid item xs={16}>
            <Button
              onClick={() => this.props.addTodo(this.state)}
              varian="contained"
              size="large"
              color="primary"
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TodoForm;
