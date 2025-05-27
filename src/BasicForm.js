import React, { useState } from 'react';

export default function BasicForm() {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    alert(`Você escreveu: "${input}"`);
  };

  return (
    <form onSubmit={onSubmit} className="p-4 border rounded bg-light">
      <div className="mb-3">
        <label htmlFor="basicInput" className="form-label">Mensagem</label>
        <input
          id="basicInput"
          className="form-control"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite algo..."
        />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}
