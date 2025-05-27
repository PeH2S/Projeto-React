import React, { useState } from 'react';

export default function InteractiveCanvas() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    setPos({ x, y });
  };

  return (
    <div className="card p-3">
      <h5 className="card-title">Área Interativa</h5>
      <div
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        className="position-relative border rounded"
        style={{ height: 200, backgroundColor: '#f8f9fa' }}
      >
        <div
          className="position-absolute bg-danger rounded-circle"
          style={{
            width: 12,
            height: 12,
            left: pos.x - 6,
            top: pos.y - 6,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
