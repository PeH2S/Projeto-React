// src/ContactList.js
import React from 'react';

export default function ContactList({ onSelectEmail, selectedEmail }) {
  // Exemplo de contatos fixos
  const contatos = [
    { nome: 'Alice', email: 'alice@example.com' },
    { nome: 'Bruno', email: 'bruno@example.com' },
    { nome: 'Carla', email: 'carla@example.com' },
    { nome: 'Daniel', email: 'daniel@example.com' },
  ];

  return (
    <div className="card shadow-sm p-4">
      <h5 className="mb-3">Contatos</h5>
      <ul className="list-group">
        {contatos.map(c => (
          <li
            key={c.email}
            className={`list-group-item list-group-item-action ${
              selectedEmail === c.email ? 'active' : ''
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectEmail(c.email)}
          >
            {c.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
