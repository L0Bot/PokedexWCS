/* eslint-disable react/prop-types */
import styles from "./Buttons.module.scss";

function Buttons({
  pokemonList,
  pokemonIndex,
  handlePrevClick,
  handleNextClick,
}) {
  return (
    <div className={styles.container}>
      {pokemonIndex > 0 ? (
        <button className={styles.button} onClick={handlePrevClick}>
          Precedent
        </button>
      ) : (
        <div className={styles.block}></div>
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button className={styles.button} onClick={handleNextClick}>
          Suivant
        </button>
      ) : (
        <div className={styles.block}></div>
      )}
    </div>
  );
}

export default Buttons;
