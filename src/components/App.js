import React, { Component } from "react";
import "./App.css";

import TodoForm from "./containers/TodoFormContainer";
import SearchAppBar from "./presentational/app-bar/AppBar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchAppBar />
        <TodoForm />
      </React.Fragment>
    );
  }
}
