const checkAnswer = (dexNumber, pokemonData, setPokemonData) => (dexNumber === pokemonData.answer
  ? (console.log('Win condition'))
  : (setPokemonData(previousState => ({
    ...previousState,
    selected: [...previousState.selected, dexNumber],
  }))));

export default checkAnswer;
