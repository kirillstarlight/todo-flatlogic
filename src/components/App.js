import React, { Component } from "react";
import "./App.css";

import TodoForm from "./containers/TodoFormContainer";
import AppBar from "./containers/AppBarContainer";
import TodoList from "./containers/TodoListContainer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <TodoForm />
        <TodoList />
      </React.Fragment>
    );
  }
}
