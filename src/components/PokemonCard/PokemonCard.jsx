/* eslint-disable react/prop-types */
import styles from "./PokemonCard.module.scss";

export function PokemonCard({ pokemon }) {
  return (
    <figure className={styles.card}>
      {pokemon.imgSrc ? (
        <img
          className={styles.pokemonArtwork}
          src={pokemon.imgSrc}
          alt={pokemon.name}
        />
      ) : (
        <p className={styles.pokemonArtwork}>❓❓❓</p>
      )}
      <figcaption className={styles.pokemonName}>{pokemon.name}</figcaption>
    </figure>
  );
}

export function PokemonCard1() {
  return (
    <figure className={styles.card}>
      <img
        className={styles.pokemonArtwork}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        alt="Bulbasaur"
      />
      <figcaption className={styles.pokemonName}>Salamèche</figcaption>
    </figure>
  );
}

export function PokemonCard2() {
  return (
    <figure className={styles.card}>
      <img
        className={styles.pokemonArtwork}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbasaur"
      />
      <figcaption className={styles.pokemonName}>Bulbizarre</figcaption>
    </figure>
  );
}

export function PokemonCard3() {
  return (
    <figure className={styles.card}>
      <img
        className={styles.pokemonArtwork}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        alt="Bulbasaur"
      />
      <figcaption className={styles.pokemonName}>Carapuce </figcaption>
    </figure>
  );
}
