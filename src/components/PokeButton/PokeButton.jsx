/* eslint-disable react/prop-types */
import styles from "./PokeButton.module.scss";
function PokeButton({ pokemonList, handleIndexChangeOnPicker }) {
  return (
    <>
      <div className={styles.container}>
        {pokemonList.map((pokemon) => (
          <button
            key={pokemon.name}
            className={styles.button}
            onClick={() => handleIndexChangeOnPicker(pokemon.name)}
          >
            <p>{pokemon.name}</p>
          </button>
        ))}
      </div>
    </>
  );
}

export default PokeButton;
