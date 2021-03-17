import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";
import db from "./firebase";

function Todo(props) {
  return (
    <div className="todo">
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy-time⏰⏰" />
        </ListItem>
        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          ⛔DELETE ME
        </Button>
      </List>
    </div>
  );
}

export default Todo;
