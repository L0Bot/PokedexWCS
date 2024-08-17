/* eslint-disable react/prop-types */
import styles from "./NavBar.module.scss";

function NavBar({ pokemonList, pokemonIndex, handleClick }) {
  return (
    <div className={styles.container}>
      {pokemonIndex > 0 ? (
        <button
          className={styles.button}
          onClick={() => handleClick({ type: "PREVIOUS" })}
        >
          Precedent
        </button>
      ) : (
        <div className={styles.block}></div>
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button
          className={styles.button}
          onClick={() => handleClick({ type: "NEXT" })}
        >
          Suivant
        </button>
      ) : (
        <div className={styles.block}></div>
      )}
    </div>
  );
}

export default NavBar;
