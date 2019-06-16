import React from 'react'
import { useFrogs } from '../context/Frogs'
import { useGrid } from '../context/Grid'

const Tile = ({ location }) => {
  const { findFrog } = useFrogs()
  const { checked, toggleTile } = useGrid()
  const coordinates = location.join()

  const frog = findFrog(location)

  const toggleChecked = id => {
    if (Object.values(checked).length >= 2 && !checked.includes(id)) {
      alert('Too many selections!')
      return
    }

    toggleTile(id)
  }

  return (
    <label className={frog ? `frog ${frog.getGender()}` : null}>
      <input
        type='checkbox'
        checked={checked.includes(coordinates)}
        onChange={() => toggleChecked(coordinates)}
      />
    </label>
  )
}

export default Tile
