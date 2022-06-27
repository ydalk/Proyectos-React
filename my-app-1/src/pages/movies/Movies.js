import React from 'react'
import Exp from '../../componentes/Exp'
import {data} from '../../data/data'
import {Datos } from '../registerStyle';


const Movies = () => {
  return (
    <Datos>         
          <Exp 
            title = "Movies:"
            info={data.experience}
          />
    </Datos>
  )
}

export default Movies