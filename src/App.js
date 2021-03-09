import React from "react";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Hello Luca</h1>
      <Product name="Amazon Echo" description="Ai assistant" price={59.99} />
      <Product
        name="Huawei P40 Pro"
        description="Best Smartphone"
        price={129.99}
      />
      <Product name="Predator" description="Gaming Laptop" price={39.99} />
    </div>
  );
}

export default App;
