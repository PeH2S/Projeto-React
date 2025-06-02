// src/FormQuiz.js
import React, { useState } from 'react';

export default function FormQuiz() {
  const pergunta = 'Qual é a capital do Brasil?';
  const opcoes = [
    { id: 'a', label: 'Rio de Janeiro' },
    { id: 'b', label: 'Brasília' },
    { id: 'c', label: 'São Paulo' },
    { id: 'd', label: 'Salvador' },
  ];
  const respostaCorreta = 'b';

  const [selecionado, setSelecionado] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [acertou, setAcertou] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!selecionado) return;
    setAcertou(selecionado === respostaCorreta);
    setEnviado(true);
  }

  return (
    <div className="card shadow-sm p-4">
      <form onSubmit={handleSubmit}>
        <h5 className="mb-3">{pergunta}</h5>
        {opcoes.map(opt => (
          <div className="form-check" key={opt.id}>
            <input
              className="form-check-input"
              type="radio"
              id={`quiz-${opt.id}`}
              name="quiz"
              value={opt.id}
              checked={selecionado === opt.id}
              onChange={() => setSelecionado(opt.id)}
            />
            <label className="form-check-label" htmlFor={`quiz-${opt.id}`}>
              {opt.label}
            </label>
          </div>
        ))}

        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={!selecionado}
        >
          Enviar
        </button>
      </form>

      {enviado && (
        <div className="mt-4">
          {acertou ? (
            <div className="alert alert-success">✅ Você acertou!</div>
          ) : (
            <div className="alert alert-danger">
              ❌ Resposta incorreta. A resposta certa é “Brasília”.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
