import React from 'react'
import Info from '../../componentes/Info'
import Bio from '../../componentes/Bio'
import {data} from '../../data/data'
import {Datos} from '../registerStyle';

const About = () => {
  return (
    <>
        <Datos >
          <Info 
            name = {data.personalData.name}
            lastname = {data.personalData.lastname}
            age = {data.personalData.age}
            nationality = {data.personalData.nationality}
          />
          <Bio
            bio = {data.bio}
          />
        </Datos>
    </>
  )
}

export default About