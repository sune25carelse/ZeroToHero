import React from "react";
import { useState } from "react";
import "./App.css";
import Product from "./Product";

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    setTodo([...todos, input]);
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

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={addTodo}>Add todo</button>

      <h2>List todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
