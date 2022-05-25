import Tarjeta from "./Tarjeta";

const PokemonElectric = ({tipo}) => {
  return (
    <>
      <h1>Pokemon Electric</h1>
      <Tarjeta 
          tipo = {tipo}
        />
    </>
  )
}

export default PokemonElectric;