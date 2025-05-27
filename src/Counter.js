import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="border p-3">
      <h1>{number}</h1>
      <button 
        onClick={() => {
          setNumber(n => n + 1);
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}
        className="btn btn-primary"
      >
        +3
      </button>
    </div>
  );
}