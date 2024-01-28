import React from "react";
import cross from "../img/icons8-close.svg";
import Todo from "./Todo";

export default function TodoLists({ todos, deleteTodo, updateTodo }) {
  return (
    <ul className="todo-list">
      {/* <li className="todo-item-container">
        <div className="todo-item">
          <input type="checkbox" />
          <span className="todo-item-label">Finish React Series</span>
        </div>
        <button className="x-button">
          <img
            src={cross}
            alt=""
            className="x-button-icon"
            style={{ color: "red" }}
          />
        </button>
      </li> */}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
