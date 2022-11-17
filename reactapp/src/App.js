
import './App.css';
import Counter from './components/counter/Counter';
import Login from './components/login/Login';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import Todolist from './components/TodoList/Todolist';
function App() {
 
  return (
    <>
       <Counter/>
       <RegistrationForm/>
       <Todolist/>
       <Login/>
    </>
   );
}

export default App;
