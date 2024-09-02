// src/StarWarsTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Personagens = () => {
    const [people, setPeople] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [currentPage, setCurrentPage] = useState('https://swapi.dev/api/people');
    const [busca, setBusca] = useState('');

    useEffect(() => {
        fetchPeople();
    }, [currentPage]);
    const fetchPeople = async () => {
        try {
            const response = await axios.get(currentPage);
            setPeople(response.data.results);
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    };
    // Function to extract the ID from the URL
    const extractIdFromUrl = (url) => {
        const id = url.match(/\/([0-9]*)\/$/);
        return id ? id[1] : 'N/A';
    };


    // Handle adding a person to favorites
    const handleAddFavorite = async (pessoa) => {
        try {
            const idStarWars = extractIdFromUrl(pessoa.url);
            const resposta = await axios.post(`/user/1/favorites/`, { id_star_wars: idStarWars });
            if (resposta.data == 201)
                alert(`${pessoa.name} foi adicionado aos favoritos!`);
            if (resposta.data == 202)
                alert(`${pessoa.name} já é um favorito`)
        } catch (erro) {
            console.error('Erro ao adicionar favorito:', erro);
            alert('Ocorreu um erro ao adicionar o favorito.');
        }
    };

    // Handlers for pagination
    const handleNextPage = () => {
        if (nextPage) {
            setCurrentPage(nextPage);
        }
    };

    const handlePreviousPage = () => {
        if (previousPage) {
            setCurrentPage(previousPage);
        }
    };


    const handleSearch = async () => {
        if (busca.trim() === '') {
            fetchPeople()
            return;
        }

        try {
            const response = await axios.get(`https://swapi.dev/api/people/?search=${busca}`);
            setPeople(response.data.results);
        } catch (error) {
            console.error('Erro ao realizar busca', error);
        }
    };
    return (
        <div>
            <h1>Personagens de Star Wars</h1>
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
                        <th>Peso</th>
                        <th>ID</th>
                        <th>Favoritar</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person) => (
                        <tr key={person.url}>
                            <td>{person.name}</td>
                            <td>{person.height}</td>
                            <td>{person.mass}</td>
                            <td>{extractIdFromUrl(person.url)}</td>
                            <td>
                                <button onClick={() => handleAddFavorite(person)}>Favoritar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: '20px' }}>
                <button onClick={handlePreviousPage} disabled={!previousPage} style={{ marginRight: '10px' }}>
                    Página Anterior
                </button>
                <button onClick={handleNextPage} disabled={!nextPage}>
                    Próxima Página
                </button>
            </div>

        </div>
    );
};

export default Personagens;
