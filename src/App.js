import React from "react";
import "./App.css";

function App() {
  const name = "sonny";
  const isMale = true;

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    <div className="app">
      {getGreeting("Luca")}
      <h2>You are a {isMale ? "Male" : "female"}</h2>
    </div>
  );
}

export default App;
