import React from 'react';
import { Tabela } from '../components/tabela';
import Header from '../components/header';

const Favoritos = () => {
  return (
    <div>
      <Header/>
      <h1>Favoritos</h1>
      <Tabela />
    </div>
  );
};

export default Favoritos;
