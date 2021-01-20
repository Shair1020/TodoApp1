import React from "react";
import "./../../App.css"
const Todo = ({ todo, DeleteTodo, UpdateTodo }) => {
  return (
    <div>
      <h1 className="todo">
        {todo.description}{" "}
        <button
          onClick={() => {
            DeleteTodo(todo.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            UpdateTodo(todo.id);
          }}
        >
          Update
        </button>
      </h1>
    </div>
  );
};

export default Todo;
