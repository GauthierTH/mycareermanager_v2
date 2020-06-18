import React from 'react'

import starRegular from '../assets/images/star-regular.svg'
import starSolid from '../assets/images/star-solid.svg'

export const priorityHelper = {
  low: 
    <div>
      <img src={starSolid} className='star-icon' alt='star-solid' />
      <img src={starRegular} className='star-icon' alt='star-regular' />
      <img src={starRegular} className='star-icon' alt='star-regular' />
      </div>,
  medium: 
    <div>
      <img src={starSolid} className='star-icon' alt='star-solid' />
      <img src={starSolid} className='star-icon' alt='star-solid' />
      <img src={starRegular} className='star-icon' alt='star-regular' />
    </div>,
  high: 
    <div>
      <img src={starSolid} className='star-icon' alt='star-solid' />
      <img src={starSolid} className='star-icon' alt='star-solid' />
      <img src={starSolid} className='star-icon' alt='star-solid' />
    </div>
}
