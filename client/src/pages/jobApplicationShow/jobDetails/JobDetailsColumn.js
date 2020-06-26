import React from 'react'

import JobOfferLink from './JobOfferLink'
import JobDescription from './JobDescription'
  
const JobDetailsColumn = ({job_offer_url, job_description}) => {
  return(
    <div className='list'>
      <div className='list-header'>
        <h2>Job details</h2>
      </div>
      <div className='list-body'>
        <JobOfferLink job_offer_url={job_offer_url} />
        <JobDescription job_description={job_description} />
      </div>
    </div>
  )
}
  
export default JobDetailsColumn
