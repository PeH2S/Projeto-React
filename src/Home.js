import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Bem-vindo à Página Inicial</h1>
            <p style={{ marginBottom: '20px', color: '#6c757d' }}>
                Navegue pelas semanas abaixo para acessar as atividades.
            </p>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                
                   <li><Link to="/Ativ01">Semana 1 – Introdução</Link></li>
                   <li><Link to="/Ativ02">Semana 2 – Formulários</Link></li>
                   <li><Link to="/Ativ03">Semana 3 – Listas</Link></li>
                   <li><Link to="/Ativ04">Semana 4 – Componentes e Interatividade</Link></li>
                   <li><Link to="/Ativ12">Semana 5 – Gerenciamento de Estado em React</Link></li>

                </ul>
            </nav>
        </div>
    );
}
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
    listItem: {
        marginBottom: '10px',
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        backgroundColor: '#ffffff'
    },
    link: {
        color: '#007bff',
        fontWeight: '500'
    }
};
export default Home;