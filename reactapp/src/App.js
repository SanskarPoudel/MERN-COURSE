import "./App.css";
import Counter from "./components/counter/Counter";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import RegistrationForm from "./components/registrationForm/RegistrationForm";
import Todolist from "./components/TodoList/Todolist";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todolist />,
    },
    {
      path: "/register",
      element: <RegistrationForm />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/todo",
      element: <Todolist />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
