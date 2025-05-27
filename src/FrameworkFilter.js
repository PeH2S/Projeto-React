import React, { useState } from 'react';

const frameworks = ['React', 'Vue', 'Angular', 'Svelte'];

export default function FrameworkFilter() {
  const [search, setSearch] = useState('');

  return (
    <div className="mb-3">
      <input
        className="form-control mb-2"
        placeholder="Filtrar frameworks"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul className="list-group">
        {frameworks
          .filter(f => f.toLowerCase().includes(search.toLowerCase()))
          .map((f, i) => (
            <li key={i} className="list-group-item">{f}</li>
          ))}
      </ul>
    </div>
  );
}
