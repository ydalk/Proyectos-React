import React from 'react'
import {data} from '../../data/data'
import Avatar from '../../componentes/Avatar'
import styled from 'styled-components'

const Tarjeta = styled.div `

  display: flex;
  align-items: center;
  margin: 150px;
  justify-content: center;

`
const MyH1 = styled.h1 `
  color: white;
`

const Home = () => {
  return (
    <Tarjeta>
        <MyH1>Johnny Depp</MyH1>
        <Avatar avatar = {data.personalData.avatar}/>
    </Tarjeta>
  )
}

export default Home