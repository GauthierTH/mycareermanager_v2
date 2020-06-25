import React from 'react'
import moment from 'moment'
import { Link } from "react-router-dom";

import { longNameHelper } from 'helpers/longName'
  
const NextStepCard = ({category, date, company_name, position, jobApplicationId}) => {
  return(
    <div className='card'>
      <div className='justify-content-between'>
        <div className='badge orange-bright-background'>{category}</div>
        <div><Link to={`/job-application/${jobApplicationId}`}><h3>{position}</h3></Link></div>
      </div>
      <div className='justify-content-between'>
        <div className='badge orange-light-background m-0'>{moment(date).format('ddd, MMM d, h::mm a')}</div>
        <div>{longNameHelper(company_name, 20)}</div>
      </div>
    </div>
  )
}
  
export default NextStepCard
