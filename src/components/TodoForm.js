import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  let [title, setTitle] = useState("");
  let handleTodo = (e) => {
    e.preventDefault();
    let todo = {
      id: Math.random(),
      title,
      complete: false,
    };
    addTodo(todo);
    setTitle("");
  };
  return (
    <form action="#" onSubmit={handleTodo}>
      <input
        type="text"
        className="todo-input"
        placeholder="What do you need to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
    </form>
  );
}
