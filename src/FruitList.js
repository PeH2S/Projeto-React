import React from 'react';

const fruits = ['Maçã', 'Banana', 'Cereja'];

export default function FruitList() {
  return (
    <ul className="list-group">
      {fruits.map((f, i) => (
        <li key={i} className="list-group-item">{f}</li>
      ))}
    </ul>
  );
}
