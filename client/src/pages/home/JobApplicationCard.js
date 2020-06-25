import React from 'react'
import { Link } from "react-router-dom";

import { priorityHelper } from 'helpers/priority'
  
const JobApplicationCard = ({company_name, position, priority, id}) => {
  return(
    <div className='card index-card'>
      <div>
        <div><Link to={`/job-application/${id}`}><h3>{position}</h3></Link></div>
        <div>{company_name}</div>
      </div>
      <div>
        {priorityHelper[priority]}
      </div>
    </div>
  )
}
  
export default JobApplicationCard
