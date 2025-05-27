import React, { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const add = e => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks(prev => [...prev, input.trim()]);
    setInput('');
  };

  return (
    <div className="card p-3">
      <h5 className="card-title">Gerenciador de Tarefas</h5>
      <form onSubmit={add} className="input-group mb-3">
        <input
          className="form-control"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button className="btn btn-outline-primary" type="submit">
          Adicionar
        </button>
      </form>
      <ul className="list-group">
        {tasks.map((t, i) => (
          <li key={i} className="list-group-item">{t}</li>
        ))}
      </ul>
    </div>
  );
}
