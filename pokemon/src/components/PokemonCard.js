import Tarjeta from "./Tarjeta";

const PokemonCard = ({tipo}) => {
  return (
    <>
      <h1>Pokemon {tipo}</h1>
      <Tarjeta 
          tipo = {tipo}
        />
    </>
  )
}

export default PokemonCard;