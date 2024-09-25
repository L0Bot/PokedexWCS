import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Pokemons from "./components/Pokemons/Pokemons.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Pokemons />} />
    </Routes>
  );
}

export default App;
