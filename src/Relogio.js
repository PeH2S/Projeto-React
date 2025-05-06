import React, { useState, useEffect } from 'react';

export default function Relogio() {
    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <>
            <h1>Meu Relógio</h1>
            <h2>{horaAtual.toLocaleTimeString()}</h2>
        </>
    );
}