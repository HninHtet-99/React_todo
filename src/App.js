import "./reset.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import CheckAllRemaining from "./components/CheckAllRemaining";
import TodoFilter from "./components/TodoFilter";
import ClearCompleted from "./components/ClearCompleted";
import { useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  let addTodo = (todo) => {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    setTodos((prev) => [...prev, todo]);
  };

  let deleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });
    setTodos((prev) => {
      return prev.filter((el) => el.id != id);
    });
  };

  let updateTodo = (todo) => {
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    setTodos((prev) => {
      return prev.map((el) => {
        if (el.id === todo.id) {
          return todo;
        }
        return el;
      });
    });
  };
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        {/* todo form */}
        <TodoForm addTodo={addTodo} />

        {/* todo lists */}
        <TodoLists
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />

        {/* check all remaining tasks */}
        <CheckAllRemaining />

        {/* other btn */}
        <div className="other-buttons-container">
          <TodoFilter />
          <ClearCompleted />
        </div>
      </div>
    </div>
  );
}

export default App;
