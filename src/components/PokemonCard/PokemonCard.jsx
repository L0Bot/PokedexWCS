/* eslint-disable react/prop-types */
import styles from "./PokemonCard.module.scss";

export default function PokemonCard({ pokemon }) {
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
