import React from "react";
import "./../../App.css"
const Todo = ({ todo, DeleteTodo, UpdateTodo }) => {
  return (
    <div>
      <li><h1 className="todo">
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
      </h1></li>
    </div>
  );
};

export default Todo;
