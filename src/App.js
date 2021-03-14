import React from "react";
import "./App.css";
// import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["play ps4", "learn with sonny"]);
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    setTodos([...todos, input]);
  };

  return (
    <div className="app">
      <h1>Hello VanWykDev</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={addTodo}>Add todo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
