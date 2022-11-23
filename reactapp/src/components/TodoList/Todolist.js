import React, { createContext, useEffect, useState } from "react";
import Add from "./todoComponents/Add";
import Footer from "./todoComponents/Footer";
import Header from "./todoComponents/Header";
import Lists from "./todoComponents/Lists";
import "./Todolist.css";

const todoContext = createContext();
export default function Todolist() {
  const [list, setList] = useState([]);

  const addlists = (activity) => {
    setList((prevList) => {
      return [activity, ...prevList];
    });
  };

  const clearLists = () => {
    setList((prevList) => {
      return [];
    });
  };

  const listLength = list.length;

  const changeTodoStrike = (index) => {
    const newTodoList = list.map((todo, idx) => {
      if (index === idx) {
        return { ...todo, completed: !todo.completed };
      } else return todo;
    });

    setList((prevList) => {
      return [...newTodoList];
    });
  };

  const deleteTodo = (index) => {
    const newList = list.filter((lists, listIndex) => {
      return index !== listIndex;
    });
    setList((_) => {
      return newList;
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const todoProviderValues = {
    addlists,
    list,
    changeTodoStrike,
    deleteTodo,
    clearLists,
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
