import React, { useState, useContext } from "react";
import { todoContext } from "../Todolist";
export default function Add() {
  const { addlists } = useContext(todoContext);

  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    const todoValue = event.target.value;
    setTodo((_) => {
      return todoValue;
    });
  };

  const addTodo = () => {
    if (todo === "") {
      console.log("Please Enter your things to do");
    } else {
      addlists({
        title: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={todo}
          placeholder="Add your new Todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-secondary" onClick={addTodo}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
