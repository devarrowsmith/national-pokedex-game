const checkAnswer = (dexNumber, pokemonData, setPokemonData) => (dexNumber === pokemonData.answer
  ? (setPokemonData(previousState => ({
    ...previousState,
    win: true,
  })))
  : (setPokemonData(previousState => ({
    ...previousState,
    selected: [...previousState.selected, dexNumber],
  }))));

export default checkAnswer;
