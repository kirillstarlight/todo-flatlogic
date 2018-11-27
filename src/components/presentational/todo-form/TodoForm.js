import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./TodoForm.css";

import { TextField } from "@material-ui/core";

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
      <React.Fragment>
        <Grid container spacing={16}>
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
        <Grid container spacing={16}>
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
            <Button onClick={this.props.addTodo} varian="contained">Create</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TodoForm;
