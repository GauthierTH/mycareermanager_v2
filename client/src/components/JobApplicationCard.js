import React from 'react'

import { priorityHelper } from '../tools/helper/priority'
  
const JobApplicationCard = ({company_name, position, priority}) => {
  return(
    <div>
      <div>{company_name}</div>
      <div>{position}</div>
      <div>{priorityHelper[priority]}</div>
    </div>
  )
}
  
export default JobApplicationCard
