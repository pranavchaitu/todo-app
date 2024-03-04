import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
// const axios = require('axios');

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("http://localhost:3000/todos");
      const json = await res.json();
      console.log(json.todos[0].completed);
      setTodos(json.todos);
    };
    fetchTodos();
  }, []);

  // not good as we rerender always - infinite requests
  // fetch("http://localhost:3000/todos").then(async (res) => {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
