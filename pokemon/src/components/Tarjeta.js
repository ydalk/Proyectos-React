const Tarjeta = ({tipo}) => {
  return (
    <div className="mainCard" >
        {
            tipo.map(item =>
            <div className="card" key={item.id}>
                <h2>{item.pokemonName}</h2>
                <img src={item.avatar} alt={item.pokemonName}/>
            </div>
            )
        }
    </div>
  )
}

export default Tarjeta;