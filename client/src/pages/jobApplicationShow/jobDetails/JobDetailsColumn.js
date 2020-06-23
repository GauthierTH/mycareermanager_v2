import React from 'react'

import JobOfferLink from './JobOfferLink'
import JobDescription from './JobDescription'
  
const JobDetailsColumn = ({job_offer_url, job_description}) => {
  return(
    <div className='col-4'>
      <div className='column-header'>
        <h2>Job details</h2>
      </div>
      <div className='column-body'>
        <JobOfferLink job_offer_url={job_offer_url} />
        <JobDescription job_description={job_description} />
      </div>
    </div>
  )
}
  
export default JobDetailsColumn
