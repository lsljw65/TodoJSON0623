import { useState } from "react";
import "./App.css";
// import React, { useState } from "react";
import NewTodoForm from "./component/NewTodoForm";
import TodoList from "./component/TodoList";
import useFetch from "./hooks/useFetch";

function App() {
  const [todos, setTodos] = useState([]);

  const todosDB = useFetch("http://localhost:3001/todos");

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }
  return (
    <div className="App">
      <h1>Todos</h1>
      <NewTodoForm addTodo={addTodo} todosDB={todosDB} />
      <hr />
      <TodoList todos={todos} todosDB={todosDB} />
    </div>
  );
}

export default App;
