import Tarjeta from "./Tarjeta";

const PokemonFire = ({tipo}) => {
  return (
    <>
      <h1>Pokemon Fire</h1>
      <Tarjeta 
          tipo = {tipo}
        />
    </>
  )
}

export default PokemonFire;