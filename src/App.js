import React from "react";
import "./App.css";
// import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["play ps4", "learn with sonny"]);
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    event.preventDefault(); // stop the refresh
    setTodos([...todos, input]);
    setInput(""); // clear up the input after click
  };

  return (
    <div className="app">
      <h1>Hello VanWykDev</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
