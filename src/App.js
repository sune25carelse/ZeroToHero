import React from "react";
import "./App.css";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import { useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when app loads  we need to listen to db and fetch new todo as we add and remov
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        ); // this
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // stop the refresh

    db.collection("todos").add({
      todo: input.toUpperCase(1),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); // clear up the input after click
  };

  return (
    <div className="app">
      <h1>Hello VanWykDev 🚀🚀</h1>

      <form>
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />

          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
