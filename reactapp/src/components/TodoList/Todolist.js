import React, { createContext, useEffect, useReducer } from "react";
import Add from "./todoComponents/Add";
import Footer from "./todoComponents/Footer";
import Header from "./todoComponents/Header";
import Lists from "./todoComponents/Lists";
import "./Todolist.css";
import { TodoController } from "./Reducer/todoReducer";

const todoContext = createContext();

export default function Todolist() {
  const [state, dispatch] = useReducer(TodoController, []);

  const addlists = (todoValue) => {
    dispatch({ type: "addLists", payload: todoValue });
  };

  const changeTodoStrike = (id) => {
    dispatch({ type: "changeTodoStrike", payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "deleteTodo", payload: id });
  };

  const clear = () => {
    dispatch({ type: "clear" });
  };

  const listLength = state.length;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "addThroughApi", payload: data }));
  }, []);

  const todoProviderValues = {
    addlists,
    state,
    changeTodoStrike,
    deleteTodo,
    clear,
    listLength,
  };

  return (
    <div className="todo-root">
      <div className="card-todo card m-auto">
        <Header />

        <todoContext.Provider value={todoProviderValues}>
          <Add />
          <Lists />
          <Footer />
        </todoContext.Provider>
      </div>
    </div>
  );
}

export { todoContext };
