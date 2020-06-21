import React, { useState } from 'react'

import EditJobDescriptionForm from './EditJobDescriptionForm'
  
const JobDescription = ({job_description}) => {
  const [editJobDescriptionFormIsOpen, setEditJobDescriptionFormIsOpen] = useState(false)
  const [jobDescription, setJobDescription] = useState(job_description)

  return(
    <div>
      <div className='row m-0'>
        <h4>Job offer</h4>
        <button onClick={() => setEditJobDescriptionFormIsOpen(true)}>edit</button>
      </div>
      {editJobDescriptionFormIsOpen ?
        <EditJobDescriptionForm jobDescription={jobDescription} setJobDescription={setJobDescription} setEditJobDescriptionFormIsOpen={setEditJobDescriptionFormIsOpen} />
        :
        jobDescription !== '' ? jobDescription : 'add a description'
      }
    </div>
  )
}
  
export default JobDescription
