import React, { useEffect, useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import pokemonGenerator from '../helpers/pokemonGenerator';

const Game = () => {
  const [difficulty, setDifficulty] = useState({
    mode: 'easy',
    blocks: 6,
  });

  const [pokemonData, setPokemonData] = useState({
    answer: 132,
    pokemon: [{
      species: {
        name: 'ditto',
      },
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
      },
    }
    ],
  });

  useEffect(() => {
    // async function initData() {
    //   const data = await pokemonGenerator();
    //   setPokemonData({
    //     answer: data.answer,
    //     pokemon: data.pokemon,
    //   });
    // } initData();
  }, []);

  return (
    <>
      <Header
        answer={pokemonData.answer}
        setDifficulty={setDifficulty}
      />
      <Grid
        pokemon={pokemonData.pokemon}
      />
    </>
  );
};
export default Game;
