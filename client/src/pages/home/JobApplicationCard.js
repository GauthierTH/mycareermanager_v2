import React from 'react'
import { Link } from "react-router-dom";

import { displayPriorityHelper } from 'helpers/displayPriority'
  
const JobApplicationCard = ({company_name, position, priority, id}) => {
  return(
    <div className='card justify-content-between'>
      <div>
        <div><Link to={`/job-application/${id}`}><h3>{position}</h3></Link></div>
        <div>{company_name}</div>
      </div>
      <div>
        {displayPriorityHelper[priority]}
      </div>
    </div>
  )
}
  
export default JobApplicationCard
