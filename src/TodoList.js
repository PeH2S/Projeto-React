import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Estudar React', done: false },
    { id: 2, text: 'Fazer café', done: false },
  ]);

  const toggle = id =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));

  return (
    <ul className="list-group">
      {todos.map(t => (
        <li
          key={t.id}
          onClick={() => toggle(t.id)}
          className={
            'list-group-item list-group-item-action ' +
            (t.done ? 'list-group-item-success' : '')
          }
          style={{ cursor: 'pointer' }}
        >
          {t.text}
        </li>
      ))}
    </ul>
  );
}
