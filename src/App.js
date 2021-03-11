import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import Product from "./Product";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
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

      <h2>The Joke Generator</h2>
      <h3>{joke}</h3>

      <form>
        <input placeholder="firstName" ref={firstNameRef} />
        <input placeholder="lastName" ref={lastNameRef} />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
