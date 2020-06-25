import React, { useState } from 'react'

import JobApplicationCard from './JobApplicationCard'
import plusSolid from 'assets/images/plus-solid.svg'
import NewJobApplicationForm from './NewJobApplicationForm'
  
const JobApplicationColumn = ({title, columnJobApplications, setJobApplications, status, jobApplications}) => {
  const [createJobApplicationFormIsOpen, setcreateJobApplicationFormIsOpen] = useState(false)

  return(
    <div className='list'>
      <div className='list-header'>
        <h2>{title} ({columnJobApplications.length})</h2>
        <img src={plusSolid} className='plus-button' onClick={() => setcreateJobApplicationFormIsOpen(true)} />
      </div>

      <div className='list-body'>
        {createJobApplicationFormIsOpen && 
          <NewJobApplicationForm 
            setcreateJobApplicationFormIsOpen={setcreateJobApplicationFormIsOpen}
            title={title}
            setJobApplications={setJobApplications}
            status={status}
            jobApplications={jobApplications}
          />
        }

        {columnJobApplications.map(jobApplication => 
          <JobApplicationCard
            key={jobApplication.id}
            id={jobApplication.id}
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
