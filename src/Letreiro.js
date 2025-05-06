import React, { useState, useEffect } from 'react';

export default function Letreiro() {
    const [texto, setTexto] = useState('Meu Letreiro Animado ');
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prevIndice) => (prevIndice + 1) % (texto.length + 1));
        }, 200); // Atualiza a cada 200ms

        return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
    }, [texto]);

    return (
        <div className="d-flex justify-content-center align-items-center my-4">
            <h1 className="display-4 text-center">
                {texto.slice(indice) + (indice > 0 ? texto.slice(0, indice) : '')}
            </h1>
        </div>
    );
}