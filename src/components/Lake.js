import React from 'react'
import { createAxis, useGrid } from '../context/Grid'
import Tile from './Tile'

const Lake = () => {
  const { width, height } = useGrid()
  const [xAxis, setXAxis] = React.useState([])
  const [yAxis, setYAxis] = React.useState([])

  React.useEffect(() => {
    setXAxis(createAxis(width))
    setYAxis(createAxis(height))
  }, [width, height])

  return (
    <table id='lake'>
      {yAxis.map(y => (
        <tr>
          {xAxis.map(x => (
            <td>
              <Tile location={[x, y]} />
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}

export default Lake
