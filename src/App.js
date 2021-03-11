import React from "react";
import "./App.css";
import Input from "./Input";
import TodoItem from "./TodoItem";
// import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const todoList = useState();
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>

        <Input />
      </div>
    </div>
  );
}

export default App;
