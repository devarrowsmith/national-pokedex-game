import React, { useEffect, useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import pokemonGenerator from '../helpers/pokemonGenerator';

const Game = () => {
  const [busy, setBusy] = useState(true);

  const [difficulty, setDifficulty] = useState({
    mode: 'easy',
    numPokemon: 6,
  });

  const [pokemonData, setPokemonData] = useState({
    answer: null,
    pokemon: [],
  });

  useEffect(() => {
    setBusy(true);
    pokemonGenerator(difficulty.numPokemon)
      .then((data) => setPokemonData({
        ...data,
      }));
    setBusy(false);
  }, []);

  return (
    <>
      <Header
        busy={busy}
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
