import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";

import TodoCard from "../todo-card/TodoCard";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "active"
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const result = this.props.cards.filter(card =>
      card.content.time.includes(this.props.searchText)
    );
    const { value } = this.state;
    return (
      <div id="todo-list">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab value="completed" label="Completed" />
          <Tab value="active" label="Active" />
        </Tabs>
        {value === "completed" && (
          <Grid container spacing={16}>
            {result
              .filter(card => card.isComplete)
              .map(card => (
                <TodoCard
                  key={card.id}
                  id={card.id}
                  card={card.content}
                  complete={true}
                />
              ))}
          </Grid>
        )}
        {value === "active" && (
          <React.Fragment>
            <Typography variant="h4" component="h5">
              Priority
            </Typography>
            <Grid container spacing={16}>
              {result
                .filter(card => card.content.priority && !card.isComplete)
                .map(card => (
                  <TodoCard
                    key={card.id}
                    id={card.id}
                    card={card.content}
                    complete={card.isComplete}
                    deleteTodo={()=>this.props.deleteTodo(card.id)}
                    changePriority={()=>this.props.changePriority(card.id)}
                    completeTodo={()=>this.props.completeTodo(card.id)}
                  />
                ))}
            </Grid>
            <Typography variant="h4" component="h5">
              All
            </Typography>
            <Grid container spacing={16}>
              {result
                .filter(card => !card.isComplete && !card.content.priority)
                .map(card => (
                  <TodoCard
                    key={card.id}
                    id={card.id}
                    card={card.content}
                    complete={card.isComplete}
                    deleteTodo={()=>this.props.deleteTodo(card.id)}
                    changePriority={()=>this.props.changePriority(card.id)}
                    completeTodo={()=>this.props.completeTodo(card.id)}
                  />
                ))}
            </Grid>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(TodoList);
