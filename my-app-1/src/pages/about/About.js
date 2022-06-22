import React from 'react'
import Info from '../../componentes/Info'
import Bio from '../../componentes/Bio'
import {data} from '../../data/data'


const About = () => {
  return (
    <>
      <div className="tarjeta">
        
        <div className="datos">
          <Info 
            name = {data.personalData.name}
            lastname = {data.personalData.lastname}
            age = {data.personalData.age}
            nationality = {data.personalData.nationality}
          />
          <Bio
            bio = {data.bio}
          />
        </div>
      </div>   
    </>
  )
}

export default About