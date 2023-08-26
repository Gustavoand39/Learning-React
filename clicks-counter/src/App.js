import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react"; // Hook de React que permite usar el estado en componentes funcionales

function App() {
  // useState devuelve un array con dos elementos:
  // 1. El valor del estado
  // 2. Una función que permite actualizar ese valor
  let [numClicks, setNumClicks] = useState(0);

  const clickHandler = () => {
    // Aumentamos el valor del estado en 1
    setNumClicks(++numClicks);
  };

  const restartCount = () => {
    // Reiniciamos el valor del estado a 0
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button text="Click" clickButton={true} clickHandler={clickHandler} />
        <Button text="Restart" clickButton={false} clickHandler={restartCount} />
      </div>
    </div>
  );
}

export default App;
