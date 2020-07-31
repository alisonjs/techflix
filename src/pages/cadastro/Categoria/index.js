import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {

  const [category, setCategory] = useState('Filmes');

  function handleCategory(event){
    const {value} = event.target;

    setCategory(value);
  }

    return (
      <PageDefault>
        <h1> Cadastro de Categoria {category}</h1>
        
        <form>
          <label>
            <input type='text'
            placeholder='Category name'
            onChange={handleCategory}
            />
          </label>
          <button>Cadastrar</button>
        </form>
      </PageDefault>
    )
  }

export default CadastroCategoria;