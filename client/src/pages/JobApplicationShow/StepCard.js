import React from 'react'
import moment from 'moment'
  
const StepCard = ({id, category, date, description, is_done}) => {
  return(
    <div className='card'>
      <div>{category}</div>
      <div>{moment(date).format('ddd, MMM d, h::mm a')}</div>
      <div>{description}</div>
      <div>{is_done}</div>
    </div>
  )
}
  
export default StepCard
