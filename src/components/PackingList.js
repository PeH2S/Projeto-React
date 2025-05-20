import React from 'react';

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h2>Lista de Viagem</h2>
      <ul>
        <Item name="Toalha" isPacked={true} />
        <Item name="Escova de Dente" isPacked={false} />
        <Item name="Chinelo" isPacked={true} />
      </ul>
    </section>
  );
}

