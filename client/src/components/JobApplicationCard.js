import React from 'react'
import { Link } from "react-router-dom";

import { priorityHelper } from '../helpers/priority'
  
const JobApplicationCard = ({company_name, position, priority, id}) => {
  return(
    <div>
      <div><Link to={`/job-application/${id}`}>{company_name}</Link></div>
      <div>{position}</div>
      <div>{priorityHelper[priority]}</div>
    </div>
  )
}
  
export default JobApplicationCard
