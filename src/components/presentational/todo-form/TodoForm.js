import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";

import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      time: date.getDate() + "." + date.getMonth() + "." + date.getFullYear(),
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

  handleClick = () => {
    this.props.addTodo(this.state);
    const date = new Date();
    this.setState({
      time: date.getDate() + "." + date.getMonth() + "." + date.getFullYear(),
      name: "",
      description: "",
      priority: false
    });
  };
  render() {
    return (
      <div id="todo-form">
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <TextField
              name="name"
              placeholder="Name"
              label="Name of todo"
              onChange={e => this.handleChange(e)}
              value={this.state.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="time"
              placeholder="Time"
              label="Deadline time"
              onChange={e => this.handleChange(e)}
              value={this.state.time}
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
              value={this.state.description}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.props.priority}
                  onChange={e => this.handleChangePriority(e)}
                  name="priority"
                />
              }
              label="Is priority?"
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} className="create-button">
          <Grid item>
            <Button
              onClick={() => this.handleClick()}
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
