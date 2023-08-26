import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  // Manejo de estado de la calculadora
  const [input, setInput] = useState("");

  const handleInput = (val) => {
    // Concatenar el valor del botón presionado al input
    setInput(input + val);
  };

  const handleEqual = () => {
    // Evaluar si el input está vacío
    input
      ? setInput(evaluate(input))
      : alert("Please enter a valid expression");
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <Screen input={input} />
        <div className="row">
          <Button clickHandler={handleInput}>1</Button>
          <Button clickHandler={handleInput}>2</Button>
          <Button clickHandler={handleInput}>3</Button>
          <Button clickHandler={handleInput}>+</Button>
        </div>
        <div className="row">
          <Button clickHandler={handleInput}>4</Button>
          <Button clickHandler={handleInput}>5</Button>
          <Button clickHandler={handleInput}>6</Button>
          <Button clickHandler={handleInput}>-</Button>
        </div>
        <div className="row">
          <Button clickHandler={handleInput}>7</Button>
          <Button clickHandler={handleInput}>8</Button>
          <Button clickHandler={handleInput}>9</Button>
          <Button clickHandler={handleInput}>*</Button>
        </div>
        <div className="row">
          <Button clickHandler={handleEqual}>=</Button>
          <Button clickHandler={handleInput}>0</Button>
          <Button clickHandler={handleInput}>.</Button>
          <Button clickHandler={handleInput}>/</Button>
        </div>
        <div className="row">
          {/* Colocar la función de otra forma */}
          <ClearButton clearHandler={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
