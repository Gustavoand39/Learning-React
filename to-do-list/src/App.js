import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="todo-list-main">
        <h1>Mis tareas</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
