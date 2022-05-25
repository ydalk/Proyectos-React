import Tarjeta from "./Tarjeta";

const PokemonRock = ({tipo}) => {
  return (
    <>
    <h1>Pokemon Rock</h1>
    <Tarjeta 
        tipo = {tipo}
      />
    </>
  )
}

export default PokemonRock;