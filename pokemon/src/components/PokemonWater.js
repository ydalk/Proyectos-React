import Tarjeta from "./Tarjeta";

const PokemonWater = ({tipo})=>{
    return(
      <>
        <h1>Pokemon Water</h1>
        <Tarjeta 
        tipo = {tipo}
      />
      </>
    )
}

export default PokemonWater;