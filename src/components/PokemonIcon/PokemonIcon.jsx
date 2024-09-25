/* eslint-disable react/prop-types */
import styles from "./PokemonIcon.module.scss";

export default function PokemonIcon({ pokemon, size }) {
  return (
    <figure className={styles.card}>
      <div className={styles.imgContainer}>
        {pokemon.sprites.shiny ? (
          <img
            className={styles.pokemonArtwork}
            src={pokemon.sprites.shiny}
            alt={`${pokemon.name.fr} thumbnail`}
            height={size}
            width={size}
          />
        ) : (
          <img
            className={styles.pokemonArtwork}
            src={pokemon.sprites.regular}
            alt={`${pokemon.name.fr} thumbnail`}
            height={size}
            width={size}
          />
        )}
      </div>
      <figcaption className={styles.pokemonName}>{pokemon.name.fr}</figcaption>

      <div className={styles.typesContainer}>
        {pokemon.types?.map((type) => (
          <img
            key={`${pokemon.name}'s type ${type.name}`}
            className={styles.typeImage}
            src={type.image}
            alt={`${type.name} image`}
          />
        ))}
      </div>
    </figure>
  );
}
