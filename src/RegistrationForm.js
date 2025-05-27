import React, { useState } from 'react';

export default function RegistrationForm() {
  const [person, setPerson] = useState({ first: '', last: '', age: '' });

  const onChange = e =>
    setPerson(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    alert(`Cadastro: ${person.first} ${person.last}, ${person.age} anos`);
  };

  return (
    <form onSubmit={onSubmit} className="p-4 border rounded">
      <h5 className="mb-3">Registro de Usuário</h5>
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <input
            name="first"
            className="form-control"
            value={person.first}
            onChange={onChange}
            placeholder="Primeiro nome"
          />
        </div>
        <div className="col-md-4">
          <input
            name="last"
            className="form-control"
            value={person.last}
            onChange={onChange}
            placeholder="Sobrenome"
          />
        </div>
        <div className="col-md-4">
          <input
            name="age"
            type="number"
            className="form-control"
            value={person.age}
            onChange={onChange}
            placeholder="Idade"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-warning">Registrar</button>
    </form>
  );
}
