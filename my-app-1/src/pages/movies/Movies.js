import React from 'react'
import Exp from '../../componentes/Exp'
import {data} from '../../data/data'
import styled from 'styled-components'

const Datos = styled.div `

  display: block;
  margin: 100px auto;
  width: 300px;
  text-align: justify;
  color: white

`

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