/* eslint-disable react/prop-types */
import { useState } from "react";
import PokeButton from "../PokeButton/PokeButton";
import PokemonIcon from "../PokemonIcon/PokemonIcon";
import styles from "./Picker.module.scss";

function Picker({ pokemonList }) {
  const defaultPokemon = {
    name: { fr: "PICK ONE" },
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
          <PokemonIcon pokemon={defaultPokemon} size={40} />
        ) : (
          <PokemonIcon pokemon={pokemonList[pokemonIndexPicker]} size={110} />
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
