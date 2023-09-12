import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "../styles/TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.text.trim()) {
      newTodo.text = newTodo.text.trim();
      const todoUpdated = [newTodo, ...todos];
      setTodos(todoUpdated);
    }
  };

  const completeTodo = (id) => {
    const todoUpdated = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(todoUpdated);
  };

  const removeTodo = (id) => {
    const todoUpdated = todos.filter((todo) => todo.id !== id);
    setTodos(todoUpdated);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <div className="todo-list-container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
