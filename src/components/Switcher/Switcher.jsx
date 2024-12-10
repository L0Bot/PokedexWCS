/* eslint-disable react/prop-types */
import PokemonCard from "../PokemonCard/PokemonCard";
import NavBar from "../NavBar/NavBar";
import styles from "./Switcher.module.scss";
import { useReducer } from "react";

function Switcher({ pokemonList }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "NEXT":
        return state + 1;
      case "PREVIOUS":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <>
      <div className={styles.container}>
        <PokemonCard pokemon={pokemonList[state]} />
      </div>
      <NavBar
        pokemonList={pokemonList}
        pokemonIndex={state}
        handleClick={dispatch}
      />
    </>
  );
}

export default Switcher;
