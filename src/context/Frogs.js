import React from 'react'
import { Frog } from '../models/Frogs'
import { findNeighbours } from './Grid'

const FrogsContext = React.createContext({})

export const FrogsProvider = ({ ...rest }) => {
  const [frogs, setFrogs] = React.useState([
    new Frog(null, null, ['tall', 'fat'], 'male', ['0', '0']),
    new Frog(null, null, ['short', 'slim'], 'female', ['1', '0'])
  ])

  const addFrog = frog => {
    setFrogs([...frogs, frog])
  }

  const findFrog = location =>
    frogs.find(frog => {
      return frog.location[0] === location[0] && frog.location[1] === location[1]
    })

  const jump = checked => {
    if (checked.length < 2) {
      alert(`You can't jump without a frog or a direction :)`)
      return false
    }

    const [first, second] = checked.map(item => item.split(','))

    const firstFrog = findFrog(first)
    const secondFrog = findFrog(second)

    const isInvalid = !!firstFrog === !!secondFrog
    if (isInvalid) {
      alert(`You can't move onto a frog`)
      return false
    }

    const frog = firstFrog || secondFrog
    const location = firstFrog ? second : first

    return frog.move(location)
  }

  const reproduce = checked => {
    if (checked.length < 2) {
      return false
    }

    const [first, second] = checked.map(item => item.split(',')).map(findFrog)

    if (!first || !second) {
      alert(`You must select frogs`)
      return false
    }

    const child = first.reproduce(second)
    if (!child) {
      return false
    }

    const spawn = findNeighbours((first.gender === 'male' ? second : first).location)
      .filter(tile => tile[0] >= 0 && tile[0] <= 10 && tile[1] >= 0 && tile[1] <= 6)
      .find(tile => !findFrog(tile))

    if (!spawn) {
      alert(`No space for a child :(`)
      return
    }

    addFrog(child.spawn(spawn))
  }

  return <FrogsContext.Provider value={{ frogs, findFrog, reproduce, jump }} {...rest} />
}

export const useFrogs = () => React.useContext(FrogsContext)
