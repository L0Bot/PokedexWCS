/* eslint-disable react/prop-types */
import { useState } from "react";
import PokeButton from "../PokeButton/PokeButton";
import PokemonCard from "../PokemonCard/PokemonCard";
import styles from "./Picker.module.scss";

function Picker({ pokemonList }) {
  const [pokemonIndexPicker, setPokemonIndexPicker] = useState(0);

  const findIndex = (name) =>
    pokemonList.findIndex((object) => object.name === name);

  const handleIndexChangeOnPicker = (name) => {
    setPokemonIndexPicker(findIndex(name));
  };
  console.log(pokemonIndexPicker);
  return (
    <>
      <div className={styles.container}>
        <PokemonCard pokemon={pokemonList[pokemonIndexPicker]} />
      </div>
      <PokeButton
        pokemonList={pokemonList}
        handleIndexChangeOnPicker={handleIndexChangeOnPicker}
      />
    </>
  );
}

export default Picker;
