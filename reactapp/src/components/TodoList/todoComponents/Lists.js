import "../Todolist.css";
import { todoContext } from "../Todolist";
import { useContext } from "react";
export default function Lists() {
  const { changeTodoStrike, list, deleteTodo } = useContext(todoContext);

  const crossTodo = (index) => {
    changeTodoStrike(index);
  };

  const delTodo = (index) => {
    deleteTodo(index);
  };

  return (
    <div>
      <ul className="list-group">
        {list.map((element, index) => {
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
