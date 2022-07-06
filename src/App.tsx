import React from 'react'
import './App.css'
import styled from 'styled-components'

const Heading = styled.h1`
  color: red;
`

function App() {
  return (
    <div className="App">
      <Heading>Hello World</Heading>
    </div>
  )
}

export default App
