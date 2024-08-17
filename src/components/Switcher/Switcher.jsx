/* eslint-disable react/prop-types */
import PokemonCard from "../PokemonCard/PokemonCard";
import NavBar from "../NavBar/NavBar";
import styles from "./Switcher.module.scss";
import { useState } from "react";

function Switcher({ pokemonList }) {
  const [pokemonIndexSwitcher, setPokemonIndexSwitcher] = useState(0);

  const handlePrevClick = () => {
    setPokemonIndexSwitcher(pokemonIndexSwitcher - 1);
  };

  const handleNextClick = () => {
    setPokemonIndexSwitcher(pokemonIndexSwitcher + 1);
  };
  return (
    <>
      <div className={styles.container}>
        <PokemonCard pokemon={pokemonList[pokemonIndexSwitcher]} />
      </div>
      <NavBar
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndexSwitcher}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </>
  );
}

export default Switcher;
