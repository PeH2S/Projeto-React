import { useState } from 'react';

export default function ContadorPessoas() {
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
    <div className="text-center mt-5">
      <h2>Contador de Pessoas</h2>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="Ícone de pessoas"
        style={{ width: '120px', marginBottom: '20px' }}
      />
      <h1>{total}</h1>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-success" onClick={incrementar}>Adicionar</button>
        <button className="btn btn-danger" onClick={decrementar}>Remover</button>
        <button className="btn btn-secondary" onClick={resetar}>Resetar</button>
      </div>
    </div>
  );
}
