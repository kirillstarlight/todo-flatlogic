import React, { Component } from "react";
import "./App.css";

import TodoForm from "./containers/TodoFormContainer";
import SearchAppBar from "./presentational/app-bar/AppBar";
import TodoList from "./containers/TodoListContainer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchAppBar />
        <TodoForm />
        <TodoList />
      </React.Fragment>
    );
  }
}
