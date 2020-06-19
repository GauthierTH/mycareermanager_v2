import React, { useState } from 'react'
import moment from 'moment'
  
const StepCard = ({id, category, date, description, is_done}) => {
  const [updateStepFormIsOpen, setUpdateStepFormIsOpen] = useState(false)

  return(
    <div className='card'>
      <div>{category}</div>
      <div>{moment(date).format('ddd, MMM d, h::mm a')}</div>
      <div>{description}</div>
      <div>{is_done}</div>
      {/* <button onClick={}>edit</button> */}
    </div>
  )
}
  
export default StepCard
