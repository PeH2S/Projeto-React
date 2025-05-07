import { useState } from 'react';
import './App.css';
import Contador from './Contador';

function App() {
  const [total, setTotal] = useState(0);

  function incrementar() {
    setTotal(total + 1);
  }

  function decrementar() {
    if (total > 0) setTotal(total - 1);
  }

  function resetar() {
    setTotal(0);
  }

  return (
    <div className="app-container">
      <h1>Contador de Pessoas</h1>
      <p className="contador">{total}</p>
      <div className="botoes">
        <Contador texto="Adicionar" onClick={incrementar} />
        <Contador texto="Remover" onClick={decrementar} />
        <Contador texto="Resetar" onClick={resetar} />
      </div>
    </div>
  );
}

export default App;
