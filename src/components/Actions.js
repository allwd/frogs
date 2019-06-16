import React from 'react'
import { useGrid } from '../context/Grid'
import { useFrogs } from '../context/Frogs'

const Actions = () => {
  const { checked, clearTiles } = useGrid()
  const { reproduce, jump } = useFrogs()

  const handleAction = action => {
    action(checked)
    clearTiles()
  }

  return (
    <>
      <button type='button' id='jump' onClick={() => handleAction(jump)}>
        Jump
      </button>
      <button type='button' id='reproduce' onClick={() => handleAction(reproduce)}>
        Reproduce
      </button>
    </>
  )
}

export default Actions
