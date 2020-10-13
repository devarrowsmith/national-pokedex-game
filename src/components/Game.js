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
    answer: null,
    pokemon: [],
  });

  useEffect(() => {
    async function initData() {
      const data = await pokemonGenerator();
      setPokemonData({
        answer: data.answer,
        pokemon: data.pokemon,
      });
    } initData();
  }, []);

  return (
    <>
      <Header
        answer={pokemonData.answer}
        setDifficulty={setDifficulty}
      />
      <Grid difficulty={difficulty} />
    </>
  );
};
export default Game;
