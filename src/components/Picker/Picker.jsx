/* eslint-disable react/prop-types */
import { useState } from "react";
import PokeButton from "../PokeButton/PokeButton";
import PokemonCard from "../PokemonCard/PokemonCard";
import styles from "./Picker.module.scss";

function Picker({ pokemonList }) {
  const defaultPokemon = {
    name: { fr: "pick a starter" },
    sprites: { shiny: "/questionMarkLogo.png" },
  };
  const [pokemonIndexPicker, setPokemonIndexPicker] = useState(null);

  const findIndex = (name) =>
    pokemonList.findIndex((object) => object.name.fr === name);

  const handleIndexChangeOnPicker = (name) => {
    setPokemonIndexPicker(findIndex(name));
  };

  return (
    <>
      <div className={styles.container}>
        {pokemonIndexPicker === null ? (
          <PokemonCard pokemon={defaultPokemon} size={20} />
        ) : (
          <PokemonCard pokemon={pokemonList[pokemonIndexPicker]} size={110} />
        )}
      </div>
      <PokeButton
        pokemonList={pokemonList}
        handleIndexChangeOnPicker={handleIndexChangeOnPicker}
      />
    </>
  );
}

export default Picker;
