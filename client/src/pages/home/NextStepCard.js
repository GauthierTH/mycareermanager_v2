import React from 'react'
import moment from 'moment'
import { Link } from "react-router-dom";

import { shortenStringHelper } from 'helpers/shortenString'
import { formatStepCategoryHelper } from 'helpers/formatStepCategory'
  
const NextStepCard = ({category, date, company_name, position, jobApplicationId}) => {
  return(
    <div className='card'>
      <div className='justify-content-between align-items-center'>
        <div className='badge orange-bright-background'>{formatStepCategoryHelper[category]}</div>
        <div><Link to={`/job-application/${jobApplicationId}`}><h3>{position}</h3></Link></div>
      </div>
      <div className='justify-content-between align-items-center'>
        <div className='badge orange-light-background mt-1'>{moment(date).format('ddd, MMM D, h:mm a')}</div>
        <div>{shortenStringHelper(company_name, 20)}</div>
      </div>
    </div>
  )
}
  
export default NextStepCard
