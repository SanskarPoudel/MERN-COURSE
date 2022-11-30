import "./App.css";
import Counter from "./pages/counter/Counter";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import RegistrationForm from "./pages/registrationForm/RegistrationForm";
import Todolist from "./pages/TodoList/Todolist";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Todolist />,
  //   },
  //   {
  //     path: "/register",
  //     element: <RegistrationForm />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/todo",
  //     element: <Todolist />,
  //   },
  //   {
  //     path: "/counter",
  //     element: <Counter />,
  //   },
  // ]);
  return (
    <>
      {/* <Navbar />
      <RouterProvider router={router} /> */}

      <Navbar />

      <Routes>
        <Route path="register" element={<RegistrationForm />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Todolist />} />
          <Route path="todo" element={<Todolist />} />

          <Route path="counter" element={<Counter />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
