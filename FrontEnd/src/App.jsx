import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import { useState } from "react";

import "./App.css";

function App() {
   const [todos, setTodos] = useState([]);


   //my one
   fetch("https://sum-server.100xdevs.com/todos")
   .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
   });

   //sir one
   useEffect(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    },3000);

   return (
      <>
         <div>
            <CreateTodo></CreateTodo>
            <Todo todos={todos}></Todo>
         </div>
      </>
   );
}

export default App;
