import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import TodoCard from "../todo-card/TodoCard";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div id="todo-list">
        <Grid container spacing={16}>
          {this.props.cards.map(card => (
            <TodoCard
              key={card.id}
              name={card.name}
              description={card.description}
              time={card.time}
            />
          ))}
        </Grid>
      </div>
    );
  }
}
