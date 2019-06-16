import React from 'react'
import Actions from './Actions'

const Legend = () => {
  return (
    <div className='legend'>
      <h3>Legend</h3>
      <ul>
        <li>
          <span className='frog male' />
          <strong>Frog male</strong>
        </li>
        <li>
          <span className='frog female' />
          <strong>Frog female</strong>
        </li>
      </ul>

      <h3>Actions</h3>
      <Actions />
    </div>
  )
}

export default Legend
