import { useState } from 'react'
import styled from 'styled-components'

import Header from './components/header'
import Footer from './components/footer'
import Deck from './components/deck'

export default function App() {


  return (
    <Corpo>
      <Header/>
      <Deck/>
      <Footer/>
    </Corpo>
  )
}

const Corpo = styled.div`
  height: 100%;
  width: 100%;
  `
