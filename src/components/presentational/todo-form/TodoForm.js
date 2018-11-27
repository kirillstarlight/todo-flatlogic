import React, { Component } from "react";
import "./TodoForm.css";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "28.11.2018",
      text: "",
      description: "",
      priority: false
    };
  }
  render() {
    return <input placeholder="time"/>;
  }
}
