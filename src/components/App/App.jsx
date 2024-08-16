import "./App.scss";
import MyTitle from "../MyTitle/MyTitle.jsx";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import { useState } from "react";
import Buttons from "../Buttons/Buttons.jsx";

const pokemonList = [
  {
    name: "salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <>
      <MyTitle />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "flex-start",
        }}
      >
        <PokemonCard pokemon={pokemonList[0]} />
        <PokemonCard pokemon={pokemonList[1]} />
        <PokemonCard pokemon={pokemonList[2]} />
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      <Buttons
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      {/* {pokemonIndex > 0 ? (
        <button onClick={handlePrevClick}>Precedent</button>
      ) : (
        // <div className="block"></div>
        " "
      )}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleNextClick}>Suivant</button>
      ) : (
        // <div className="block"></div>
        " "
      )} */}
    </>
  );
}

export default App;
