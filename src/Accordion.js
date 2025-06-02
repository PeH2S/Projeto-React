// src/Accordion.js
import React, { useState } from 'react';

export default function Accordion() {
  // Exemplo com três itens de FAQs
  const itens = [
    {
      id: 1,
      titulo: 'O que é React?',
      conteudo:
        'React é uma biblioteca JavaScript para construir interfaces de usuário de forma declarativa e baseada em componentes.',
    },
    {
      id: 2,
      titulo: 'Como eu instalo o create-react-app?',
      conteudo:
        'Através do npm: <code>npm install -g create-react-app</code> e depois <code>npx create-react-app meu-app</code>.',
    },
    {
      id: 3,
      titulo: 'O que é lifting state up?',
      conteudo:
        'É o processo de elevar o estado para um componente-pai para que vários componentes-filho possam compartilhar o mesmo estado.',
    },
  ];

  const [abertoId, setAbertoId] = useState(null);

  function toggle(id) {
    setAbertoId(prev => (prev === id ? null : id));
  }

  return (
    <div className="card shadow-sm p-4">
      <h5 className="mb-4">Accordion de Perguntas</h5>
      {itens.map(item => (
        <div className="mb-2" key={item.id}>
          <button
            onClick={() => toggle(item.id)}
            className="btn btn-outline-primary w-100 text-start"
          >
            {item.titulo}
          </button>
          {abertoId === item.id && (
            <div className="card card-body border-top-0">
              <p
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: item.conteudo }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
