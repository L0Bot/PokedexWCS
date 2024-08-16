function PokemonCard() {
  return (
    <figure className="card">
      <img
        className="pokemonArtwork"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbasaur"
      />
      <figcaption className="pokemonName">Bulbasaur</figcaption>
    </figure>
  );
}
export default PokemonCard;
