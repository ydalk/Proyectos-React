import React from 'react'
import {data} from '../../data/data'
import Avatar from '../../componentes/Avatar'
import {Tarjeta, MyH1} from '../registerStyle';


const Home = () => {
  return (
    <Tarjeta>
        <MyH1>Johnny Depp</MyH1>
        <Avatar avatar = {data.personalData.avatar}/>
    </Tarjeta>
  )
}

export default Home