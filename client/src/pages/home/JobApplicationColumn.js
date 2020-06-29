import React, { useState } from 'react'

import JobApplicationCard from './JobApplicationCard'
import NewJobApplicationForm from './NewJobApplicationForm'
import NewButton from 'components/NewButton'
  
const JobApplicationColumn = ({title, columnJobApplications, setJobApplications, status, jobApplications}) => {
  const [newJobApplicationFormIsOpen, setNewJobApplicationFormIsOpen] = useState(false)

  return(
    <div className='list'>
      <div className='list-header'>
        <h2>{title} ({columnJobApplications.length})</h2>
        <NewButton setNewItemFormIsOpen={setNewJobApplicationFormIsOpen} />
      </div>

      <div className='list-body'>
        {newJobApplicationFormIsOpen && 
          <NewJobApplicationForm 
            setNewJobApplicationFormIsOpen={setNewJobApplicationFormIsOpen}
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
