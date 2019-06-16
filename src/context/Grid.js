import React from 'react'

export const createAxis = fields =>
  Array.apply(null, { length: fields })
    .map(Number.call, Number)
    .map(String)
export const locationDiff = (first, second) =>
  Math.abs(first[0] - second[0]) + Math.abs(first[1] - second[1])

export const findNeighbours = (location, range = 1) => {
  const results = []
  const numbers = []
  for (let n = -range; n <= range; n++) {
    numbers.push(n)
  }

  for (const dx of numbers) {
    for (const dy of numbers) {
      if (dx === 0 && dy === 0) continue
      results.push([String(Number(location[0]) + dx), String(Number(location[1]) + dy)])
    }
  }

  return results
}

const GridContext = React.createContext({})

export const GridProvider = ({ ...rest }) => {
  const [grid, setGrid] = React.useState({
    width: 10,
    height: 6,
    checked: []
  })

  const toggleTile = location => {
    let checked = grid.checked
    if (grid.checked.includes(location)) {
      checked = checked.filter(item => item !== location)
    } else {
      checked.push(location)
    }

    setGrid({ ...grid, checked })
  }

  const clearTiles = () => {
    const checked = []
    setGrid({ ...grid, checked })
  }

  return <GridContext.Provider value={{ ...grid, toggleTile, clearTiles }} {...rest} />
}

export const useGrid = () => React.useContext(GridContext)
