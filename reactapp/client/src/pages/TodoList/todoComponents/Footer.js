import { useDispatch, useSelector } from "react-redux";
import "../Todolist.css";
import { clearAll } from "../TodoSlice";

export default function Footer() {
  const todos = useSelector((state) => state.todo);
  const listLength = todos.length;
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearAll());
  };
  return (
    <div className="d-flex justify-content-between">
      <p className="pending-text mt-3">
        You have {listLength} task
        {listLength === 1 ? "" : "s"} in the Todo List
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
