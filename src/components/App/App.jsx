import "./App.scss";
import MyTitle from "../MyTitle/MyTitle.jsx";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import { useState } from "react";
import Switcher from "../Switcher/Switcher.jsx";
import DisplayMessage from "../Messages/DisplayMessage.jsx";
import InputMessage from "../Messages/InputMessage.jsx";
import Picker from "../Picker/Picker.jsx";

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
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <MyTitle />
      <Switcher pokemonList={pokemonList} />
      <Picker pokemonList={pokemonList} />
      <div className="cardContainer">
        {pokemonList.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
      <div>
        <InputMessage handleTextChange={handleTextChange} />
        <DisplayMessage message={message} />
      </div>
    </>
  );
}

export default App;
