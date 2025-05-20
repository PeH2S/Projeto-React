import React from 'react';
import Gallery from './components/Gallery';
import PackingList from './components/PackingList';

const Ativ03 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Semana 3 - Componentes React</h1>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Galeria de Perfis</h2>
        <Gallery />
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Lista de Viagem</h2>
        <PackingList />
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  header: {
    color: '#343a40',
    fontWeight: 'bold'
  },
  subheader: {
    color: '#495057',
    marginTop: '20px'
  },
  section: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    border: '1px solid #dee2e6'
  }
};

export default Ativ03;
