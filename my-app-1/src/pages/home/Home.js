import React from 'react'
import {data} from '../../data/data'
import Avatar from '../../componentes/Avatar'

const Home = () => {
  return (
    <div className="tarjeta">
        <h1>Johnny Depp</h1>
        <Avatar avatar = {data.personalData.avatar}/>
    </div>
  )
}

export default Home