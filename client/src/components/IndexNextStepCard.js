import React from 'react'
import moment from 'moment'
import { Link } from "react-router-dom";
  
const IndexNextStepCard = ({category, date, company_name, position, jobApplicationId}) => {
  return(
    <div>
      <div>{category}</div>
      <div>{moment(date).format('ddd, MMM d, h::mm a')}</div>
      <div><Link to={`/job-application/${jobApplicationId}`}>{company_name}</Link></div>
      <div>{position}</div>
    </div>
  )
}
  
export default IndexNextStepCard
