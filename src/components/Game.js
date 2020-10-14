import React, { useEffect, useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import refreshPokemonData from '../helpers/refreshPokemonData';

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
    refreshPokemonData(setBusy, setPokemonData, difficulty);
  }, []);

  return (
    <>
      <Header
        busy={busy}
        answer={pokemonData.answer}
        setDifficulty={setDifficulty}
        setBusy={setBusy}
        setPokemonData={setPokemonData}
        difficulty={difficulty}
      />
      <Grid
        pokemon={pokemonData.pokemon}
      />
    </>
  );
};
export default Game;
