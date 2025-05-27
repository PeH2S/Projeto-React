import React, { useState } from 'react';

export default function ShapeCustomizer() {
  const [shapes, setShapes] = useState([
    { id: 1, size: 50, color: 'primary' },
    { id: 2, size: 75, color: 'success' },
  ]);

  const resize = (id, delta) =>
    setShapes(prev =>
      prev.map(s => (s.id === id ? { ...s, size: s.size + delta } : s))
    );

  return (
    <div className="row g-4">
      {shapes.map(s => (
        <div key={s.id} className="col-sm-6 col-md-4">
          <div className="card p-3 text-center">
            <div
              className={`mx-auto bg-${s.color} rounded`}
              style={{ width: s.size, height: s.size }}
            />
            <div className="btn-group mt-3">
              <button
                onClick={() => resize(s.id, -10)}
                className="btn btn-outline-secondary btn-sm"
              >
                −
              </button>
              <button
                onClick={() => resize(s.id, +10)}
                className="btn btn-outline-secondary btn-sm"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
