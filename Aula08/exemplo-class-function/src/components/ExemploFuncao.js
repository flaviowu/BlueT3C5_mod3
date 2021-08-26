import React, { useEffect, useState } from 'react';

export default function ExemploFuncao() {
    const [count, setCount] = useState(0)
    const [lista, setLista] = useState([
        {
            nome: 'Kiki',
            filme: 'O Serviço de Entregas da Kiki'
        },

        {
            nome: 'Totoro',
            filme: 'Meu Amigo Totoro'
        }
    ])

    useEffect(() => {
        document.title = count;
    }, [count])

    return (
        <>
            <div className='teste1'>
                <h2>Exemplo Função</h2>
                <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)}>Adicionar!</button>
                {/* <button onClick={() => setCount(count = 0)}>Zerar!</button> */}
                <button onClick={() => setCount(count - 1)}>Subtrair!</button>
            </div>

            <div className='teste2'>
                <ul>
                    {lista.map((lista, index) => (
                        <li key={index}>
                            <p>
                                {lista.nome} é personagem de: {lista.filme}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}