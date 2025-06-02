// src/FormTicket.js
import React, { useState } from 'react';

export default function FormTicket() {
  const [nome, setNome] = useState('');
  const [destino, setDestino] = useState('São Paulo');
  const [quantidade, setQuantidade] = useState(1);
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="card shadow-sm p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ticket-nome" className="form-label">
            Nome completo
          </label>
          <input
            id="ticket-nome"
            type="text"
            className="form-control"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ticket-destino" className="form-label">
            Destino
          </label>
          <select
            id="ticket-destino"
            className="form-select"
            value={destino}
            onChange={e => setDestino(e.target.value)}
          >
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Belo Horizonte</option>
            <option>Curitiba</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="ticket-quantidade" className="form-label">
            Quantidade de ingressos
          </label>
          <input
            id="ticket-quantidade"
            type="number"
            className="form-control"
            min="1"
            max="10"
            value={quantidade}
            onChange={e => setQuantidade(Number(e.target.value))}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Reservar
        </button>
      </form>

      {enviado && (
        <div className="alert alert-info mt-4">
          Ingressos reservados para <strong>{nome}</strong> <br />
          Destino: <strong>{destino}</strong> <br />
          Quantidade: <strong>{quantidade}</strong>
        </div>
      )}
    </div>
  );
}
