import React, { useState } from 'react';
import { FaRestroom, FaMale, FaFemale } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineReload } from 'react-icons/ai';

export default function ContadorPessoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const total = homens + mulheres;

  const incH = () => setHomens(h => h + 1);
  const decH = () => setHomens(h => (h > 0 ? h - 1 : 0));
  const incM = () => setMulheres(m => m + 1);
  const decM = () => setMulheres(m => (m > 0 ? m - 1 : 0));
  const resetAll = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="card shadow-sm p-4">
      {/* Ícone geral tipo banheiro */}
      <FaRestroom size={64} className="text-secondary mb-3 d-block mx-auto" />

      <h4 className="card-title mb-4 text-center">Contador de Pessoas</h4>
      <div className="row mb-4">
        <div className="col text-center">
          {/* Ícone homem */}
          <FaMale size={48} className="text-primary mb-2" />
          <h5 className="mb-3">Homens</h5>
          <div className="btn-group">
            <button onClick={decH} className="btn btn-outline-primary">
              <AiOutlineMinus size={16} />
            </button>
            <span className="btn btn-light disabled px-4">{homens}</span>
            <button onClick={incH} className="btn btn-outline-primary">
              <AiOutlinePlus size={16} />
            </button>
          </div>
        </div>
        <div className="col text-center">
          {/* Ícone mulher */}
          <FaFemale size={48} className="text-danger mb-2" />
          <h5 className="mb-3">Mulheres</h5>
          <div className="btn-group">
            <button onClick={decM} className="btn btn-outline-danger">
              <AiOutlineMinus size={16} />
            </button>
            <span className="btn btn-light disabled px-4">{mulheres}</span>
            <button onClick={incM} className="btn btn-outline-danger">
              <AiOutlinePlus size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">
          Total: <span className="badge bg-secondary px-3 py-2">{total}</span>
        </h5>
        <button onClick={resetAll} className="btn btn-outline-secondary">
          <AiOutlineReload size={20} className="me-1" /> Resetar
        </button>
      </div>
    </div>
  );
}
