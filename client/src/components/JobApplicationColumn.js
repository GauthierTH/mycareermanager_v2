import React from 'react'

import JobApplicationCard from './JobApplicationCard'
  
const JobApplicationColumn = ({title, jobApplications}) => {
  return(
    <div>
      <div className='card-header'>
        <h2>{title} ({jobApplications.length})</h2>
      </div>
      <div className='card-body'>
        {jobApplications.map(jobApplication => 
          <JobApplicationCard
            key={jobApplication.id}
            company_name={jobApplication.company_name}
            position={jobApplication.position}
            priority={jobApplication.priority}
          />
        )}
      </div>
    </div>
  )
}
  
export default JobApplicationColumn
