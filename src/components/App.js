import React, { Component } from "react";
import "./App.css";

import TodoForm from './presentational/todo-form/TodoForm';

export default class App extends Component {
  render() {
    return <TodoForm/>;
  }
}
