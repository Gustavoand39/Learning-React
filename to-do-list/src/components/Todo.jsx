import React from "react";
import "../styles/Todo.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Todo({ id, text, completed, completeTodo, removeTodo }) {
  return (
    <div className={completed ? "todo-container completed" : "todo-container"}>
      <div className="todo-text" onClick={() => completeTodo(id)}>
        {text}
      </div>

      <div className="todo-icons-container" onClick={() => removeTodo(id)}>
        <AiFillCloseCircle className="todo-icon" />
      </div>
    </div>
  );
}

export default Todo;
