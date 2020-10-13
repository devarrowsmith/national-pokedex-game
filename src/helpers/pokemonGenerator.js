import dexGenerator from './dexGenerator';
import answerGenerator from './answerGenerator';
import compilePokemon from './compilePokemon';

const pokemonGenerator = async () => {
  const dex = dexGenerator(6);
  const answer = answerGenerator(dex);
  const pokemon = await compilePokemon(dex);
  const pokemonData = {
    answer,
    pokemon,
  };
  return pokemonData;
};

export default pokemonGenerator;
