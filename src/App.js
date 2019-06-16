import React from 'react'
import Description from './components/Description'
import Lake from './components/Lake'
import Legend from './components/Legend'
import { FrogsProvider } from './context/Frogs'
import { GridProvider } from './context/Grid'

function App() {
  return (
    <GridProvider>
      <FrogsProvider>
        <Description />
        <Lake />
        <Legend />
      </FrogsProvider>
    </GridProvider>
  )
}

export default App
