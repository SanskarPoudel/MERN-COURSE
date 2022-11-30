import Add from "./todoComponents/Add";
import Footer from "./todoComponents/Footer";
import Header from "./todoComponents/Header";
import Lists from "./todoComponents/Lists";
import "./Todolist.css";

export default function Todolist() {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "addThroughApi", payload: data }));
  // }, []);

  return (
    <div className="todo-root">
      <div className="card-todo card m-auto">
        <Header />

        <Add />
        <Lists />
        <Footer />
      </div>
    </div>
  );
}
