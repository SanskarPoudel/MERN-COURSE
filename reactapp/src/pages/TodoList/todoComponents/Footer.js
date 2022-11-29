import React, { useContext } from "react";
import "../Todolist.css";
import { todoContext } from "../Todolist";
export default function Footer() {
  const { clear, listLength } = useContext(todoContext);

  const handleClear = () => {
    clear();
  };
  return (
    <div className="d-flex justify-content-between">
      <p className="pending-text mt-3">
        You have {listLength} task{listLength === 1 ? "" : "s"} in the Todo List
      </p>
      <button
        type="button"
        className=" danger btn btn-danger mt-3"
        onClick={handleClear}
      >
        Clear All
      </button>
    </div>
  );
}
