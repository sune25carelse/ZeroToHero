import React from "react";
import "./App.css";
// import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["play ps4", "learn with sonny"]);

  return (
    <div className="app">
      <h1>Hello VanWykDev</h1>
      <input />
      <button>Add todo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
