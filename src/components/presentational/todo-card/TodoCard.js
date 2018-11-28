import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TodoCard;
