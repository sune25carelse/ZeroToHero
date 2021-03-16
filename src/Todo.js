import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="todo">
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.text} secondary="Dummy-time⏰⏰" />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
