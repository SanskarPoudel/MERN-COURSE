import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../TodoSlice";
export default function Lists() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo);

  const crossTodo = (index) => {
    dispatch(completedTodo(index));
  };

  const delTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <ul className="list-group">
        {todos.map((element, index) => {
          return (
            <li
              className={
                element.completed === false
                  ? "list-group-item d-flex justify-content-between"
                  : "list-group-item d-flex justify-content-between text-decoration-line-through"
              }
            >
              <div
                className="listTopic"
                key={index}
                onClick={(event) => crossTodo(index)}
              >
                {" "}
                {element.title}{" "}
              </div>{" "}
              <div className="btns ">
                <button
                  className=" btn btn-warning"
                  key={index}
                  onClick={(event) => delTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
