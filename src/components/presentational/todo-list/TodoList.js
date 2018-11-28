import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import TodoCard from "../todo-card/TodoCard";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const result = this.props.cards.filter(card =>
      card.content.time.includes(this.props.searchText)
    );
    return (
      <div id="todo-list">
        <Grid container spacing={16}>
          {result.map(card => (
            <TodoCard key={card.id} card={card.content} />
          ))}
        </Grid>
      </div>
    );
  }
}
