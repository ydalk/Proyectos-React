import React from 'react'
import {data} from '../../data/data'
import Education from '../../componentes/Education'

const Experience = () => {
  return (
    <div className="tarjeta" >
        <Education 
            title = "Education:"
            info={data.education}
          />
    </div>
  )
}

export default Experience