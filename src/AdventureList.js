import React, { useState } from 'react';

export default function AdventureList() {
  const [list, setList] = useState([
    'Viajar',
    'Aprender Piano',
    'Subir Montanha',
  ]);

  const remove = idx => setList(prev => prev.filter((_, i) => i !== idx));

  return (
    <ul className="list-group">
      {list.map((item, i) => (
        <li
          key={i}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {item}
          <button
            onClick={() => remove(i)}
            className="btn btn-sm btn-outline-danger"
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}
