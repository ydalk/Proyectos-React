import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PokemonRock from './components/PokemonRock';
import {pokemonData}  from './Data/PokemonData';
import PokemonWater from'./components/PokemonWater'
import PokemonFire from './components/PokemonFire';
import PokemonElectric from './components/PokemonElectric';

function App() {

  const [state, setState] = useState();

  const handleTarjeta =(valor)=>{
    if(valor === 1){
        setState(<PokemonRock 
          tipo = {pokemonData.rock}
        />)
    }else if (valor === 2) {
        setState(<PokemonWater 
          tipo = {pokemonData.water}
        />)
    } else if (valor === 3) {
      setState(<PokemonFire 
        tipo = {pokemonData.fire}
      />)
    } else if (valor === 4) {
      setState(<PokemonElectric 
        tipo = {pokemonData.electric}
      />)
    } 
  }

  return (
    <div className="App">
      <Navbar 
        ChangeState={handleTarjeta}
      />
      {
        state
      }      
    </div>
  );
}

export default App;
