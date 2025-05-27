import React, { useState } from 'react';

export default function MultiCounter() {
  const [vals, setVals] = useState([0, 0, 0]);

  const inc = idx =>
    setVals(prev => prev.map((n, i) => (i === idx ? n + 1 : n)));

  return (
    <div className="row g-3">
      {vals.map((n, i) => (
        <div key={i} className="col-auto text-center">
          <span className="badge bg-primary fs-5">{n}</span>
          <div>
            <button
              onClick={() => inc(i)}
              className="btn btn-sm btn-success mt-2"
            >
              +1
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
