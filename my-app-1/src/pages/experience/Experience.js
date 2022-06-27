import React from 'react'
import {data} from '../../data/data'
import Education from '../../componentes/Education'
import {Datos } from '../registerStyle';

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