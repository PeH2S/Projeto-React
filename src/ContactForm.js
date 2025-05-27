import React, { useState } from 'react';

export default function ContactForm() {
  const [data, setData] = useState({ name: '', email: '' });

  const handleChange = e =>
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Nome: ${data.name}\nEmail: ${data.email}`);
  };

  return (
    <div className="card p-4">
      <h5 className="card-title">Fale Conosco</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="contactName" className="form-label">Nome</label>
          <input
            id="contactName"
            name="name"
            className="form-control"
            value={data.name}
            onChange={handleChange}
            placeholder="Seu nome"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactEmail" className="form-label">Email</label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            className="form-control"
            value={data.email}
            onChange={handleChange}
            placeholder="seu@exemplo.com"
          />
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
}
