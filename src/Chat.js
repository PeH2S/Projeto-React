// src/Chat.js
import React, { useState } from 'react';

const mensagensIniciais = {
  'alice@example.com': [
    { id: 1, autor: 'Alice', texto: 'Oi, tudo bem?' },
    { id: 2, autor: 'Você', texto: 'Tudo ótimo, e você?' },
  ],
  'bruno@example.com': [
    { id: 1, autor: 'Bruno', texto: 'Fala aí!' },
  ],
  'carla@example.com': [
    { id: 1, autor: 'Carla', texto: 'E aí?' },
  ],
  'daniel@example.com': [
    { id: 1, autor: 'Daniel', texto: 'Olá!' },
  ],
};

export default function Chat({ email }) {
  // Inicializamos as mensagens com base no email selecionado
  const [mensagens, setMensagens] = useState(() => {
    // clone para não alterar o objeto original
    return mensagensIniciais[email]
      ? [...mensagensIniciais[email]]
      : [];
  });
  const [novaMensagem, setNovaMensagem] = useState('');

  function handleEnviar(e) {
    e.preventDefault();
    if (!novaMensagem.trim()) return;
    setMensagens(prev => [
      ...prev,
      { id: Date.now(), autor: 'Você', texto: novaMensagem },
    ]);
    setNovaMensagem('');
  }

  return (
    <div className="card shadow-sm p-4 h-100 d-flex flex-column">
      <h5 className="mb-3">Chat com <strong>{email}</strong></h5>

      <div className="flex-grow-1 mb-3" style={{ overflowY: 'auto', maxHeight: '300px' }}>
        {mensagens.map(msg => (
          <div key={msg.id} className="mb-2">
            <strong>{msg.autor}:</strong> {msg.texto}
          </div>
        ))}
      </div>

      <form onSubmit={handleEnviar} className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Escreva sua mensagem..."
          value={novaMensagem}
          onChange={e => setNovaMensagem(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}
