import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

import Header from './components/header'
import Footer from './components/footer'
import Deck from './components/deck'
import cards from './components/data'

export default function App() {
  let [count, setCount] = useState(0);
  const responder = () => {
    console.log('respondeu 1');
    let valor = count + 1;
    console.log(valor);
    setCount(valor);
  }
  
  
  
  return (
    <Corpo>
      <Header/>
      <Deck cards={cards} responder={responder}/>
      <Footer cards={cards} respondidas={count}/>
    </Corpo>
  )
}

const Corpo = styled.div`
  height: 100%;
  width: 100%;
  `
