import React from "react";
import "./App.css";
import Product from "./Product";
import useRandomJoke from "./useRandomJoke";

function App() {
  const joke = useRandomJoke("Sune", "Arlene");
  // const [joke, setJoke] = useState("");

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
      <button>Generate Joke</button>
    </div>
  );
}

export default App;
