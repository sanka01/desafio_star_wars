import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const Tabela = () => {
    const [dados, setDados] = useState([])
    const [busca, setBusca] = useState('');

    useEffect(
        () => {
            fetchData()
        }, []

    )
    const fetchData = async () => {

        try {
            const response = await axios.get('/user/1/favorites')
            setDados(response.data)
        } catch (error) {
            console.error('erro ao buscar dados', error)
        }
    }
    const handleDelete = async (id) => {

        const response = await fetch(`/user/1/favorites/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setDados(dados.filter((item) => item.id !== id));
            alert('Item deleted successfully');
        } else {
            alert('Failed to delete item');
        }

    }
    const handleSearch = async () => {
        if (busca.trim() === '') {
            fetchData()
            return;
        }

        try {
            const dadosBusca = dados.filter(item => 
                item.name.toLowerCase().includes(busca.toLowerCase())
            )
            setDados(dadosBusca);
        } catch (error) {
            console.error('Erro ao realizar busca', error);
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Buscar por nome"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />
            <button onClick={handleSearch}>Pesquisar</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Altura</th>
                        <th>Massa</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.height}cm</td>
                            <td>{item.mass}kg</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

