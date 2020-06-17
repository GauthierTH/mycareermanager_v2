import React from 'react'
import moment from 'moment'
  
const IndexNextStepCard = ({category, date, company_name, position}) => {
  return(
    <div>
      <div>{category}</div>
      <div>{moment(date).format('ddd, MMM d, h::mm a')}</div>
      <div>{company_name}</div>
      <div>{position}</div>
    </div>
  )
}
  
export default IndexNextStepCard
