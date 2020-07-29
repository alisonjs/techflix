import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
    return (
      <PageDefault>
        <h1> Cadastro de Categoria</h1>
        <Link to="/cadastro/categoria">
            Cadastro de Categoria
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;