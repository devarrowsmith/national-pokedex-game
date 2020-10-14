import React, { useEffect, useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import pokemonGenerator from '../helpers/pokemonGenerator';

const Game = () => {
  const [difficulty, setDifficulty] = useState({
    mode: 'easy',
    numPokemon: 6,
  });

  const [pokemonData, setPokemonData] = useState({
    answer: null,
    pokemon: [],
  });

  useEffect(() => {
    pokemonGenerator(difficulty.numPokemon)
      .then((data) => setPokemonData({
        ...data,
      }));
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
