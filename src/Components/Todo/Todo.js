import React from "react";

const Todo = ({ todo, DeleteTodo }) => {
  return (
    <div>
      <h1>
        {todo.description} <button onClick={() =>{
            DeleteTodo(todo.id)
        }}>Delete</button>
        <button>Update</button>
      </h1>
    </div>
  );
};

export default Todo;
