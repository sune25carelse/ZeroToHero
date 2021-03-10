import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Product from "./Product";

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState(""); // prepare state
  const [randomNr, setRandomNr] = useState(Math.floor(Math.random() * 101));

  const [test, setTest] = useState("whoops");

  useEffect(() => {
    if (randomNr < 50) {
      console.log("render");
    }
  });

  useEffect(() => {
    const testing = () => {
      console.log("render");
    };

    testing();
  });

  useEffect(() => {
    console.log("render");
  });

  const addTodo = (e) => {
    e.preventDefault(); // prevent refresh
    setTodo([...todos, input]); // then list of todos
    setInput("");
  };

  return (
    <div className="app">
      <h1>Luca Todo</h1>
      <Product name="Amazon Echo" description="Ai assistant" price={59.99} />
      <Product
        name="Huawei P40 Pro"
        description="Best Smartphone"
        price={129.99}
      />

      <Product name="Predator" description="Gaming Laptop" price={39.99} />
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>
      <h2>List todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
