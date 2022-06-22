import React from 'react'
import Exp from '../../componentes/Exp'
import {data} from '../../data/data'

const Movies = () => {
  return (
    <div className="tarjeta">         
          <Exp 
            title = "Movies:"
            info={data.experience}
          />
    </div>
  )
}

export default Movies