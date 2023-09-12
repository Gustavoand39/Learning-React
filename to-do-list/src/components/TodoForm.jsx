import React, { useState } from "react";
import "../styles/TodoForm.css";
import { v4 as uuidv4 } from "uuid";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    props.onSubmit(newTodo);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Escribe una tarea"
        name="text"
        onChange={handleChange}
      />
      <button className="todo-button">Agregar tarea</button>
    </form>
  );
}

export default TodoForm;
