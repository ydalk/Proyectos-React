import React from 'react'
import {data} from '../../data/data'
import Education from '../../componentes/Education'
import styled from 'styled-components'

const Datos = styled.div `

  display: block;
  margin: 100px auto;
  width: 300px;
  text-align: justify;
  color: white

`

const Experience = () => {
  return (
    <Datos >
        <Education 
            title = "Education:"
            info={data.education}
          />
    </Datos>
  )
}

export default Experience