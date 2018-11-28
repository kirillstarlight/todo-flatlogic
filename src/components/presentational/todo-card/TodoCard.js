import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';

const TodoCard = props => {
  console.log(props);
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {props.card.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.card.time}
          </Typography>
          <Typography component="p">{props.card.description}</Typography>
        </CardContent>
        <CardActions>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.complete}
                onChange={() => props.completeTodo()}
                name="active"
              />
            }
            label="complete"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.card.priority}
                onChange={() => props.changePriority()}
                name="priority"
              />
            }
            label="priority"
          />
          <br/>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => props.deleteTodo()}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TodoCard;
