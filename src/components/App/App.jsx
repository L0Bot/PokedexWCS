import "./App.scss";
import MyTitle from "../MyTitle/MyTitle.jsx";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import { useEffect, useState } from "react";
import Switcher from "../Switcher/Switcher.jsx";
import axios from "axios";
import DisplayMessage from "../Messages/DisplayMessage.jsx";
import InputMessage from "../Messages/InputMessage.jsx";
import Picker from "../Picker/Picker.jsx";

const url = "https://tyradex.vercel.app/api/v1/pokemon";

function App() {
  const [message, setMessage] = useState("");
  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setPokemonList(res.data.slice(1));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
        setLoading(false);
      });
  }, []);

  const filteredList = pokemonList.filter(
    (pokemon) =>
      pokemon.name.fr === "Bulbizarre" ||
      pokemon.name.fr === "Salamèche" ||
      pokemon.name.fr === "Carapuce"
  );

  return (
    <>
      <MyTitle />
      {loading ? (
        <p>Loading</p>
      ) : (
        //  pokemonList.length > 0 ? (
        //   <p>NOT FOUND</p>
        // ) :
        <>
          <Switcher pokemonList={pokemonList} />
          <Picker pokemonList={filteredList} />
          {/* randomizer ? random number between 1 & 1026 its my index pokemonList[rdm]  */}
          <div className="cardContainer">
            {pokemonList.length > 0 &&
              pokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name.fr}
                  pokemon={pokemon}
                  size={110}
                />
              ))}
          </div>
          <div>
            <InputMessage handleTextChange={handleTextChange} />
            <DisplayMessage message={message} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
