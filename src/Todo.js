import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [input, setInput] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <div className="todo">
        <div className="todo__container">
          <List>
            <ListItem>
              <ListItemAvatar></ListItemAvatar>
              <ListItemText
                primary={props.todo.todo}
                secondary="Dummy-time⏰⏰"
              />
            </ListItem>
            <button onClick={(e) => setOpen(true)}>Edit</button>
            <DeleteForeverIcon
              onClick={(event) =>
                db.collection("todos").doc(props.todo.id).delete()
              }
            />
          </List>
        </div>
      </div>
    </>
  );
}

export default Todo;
