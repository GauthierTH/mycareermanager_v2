import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

import { updateJobApplicationRequest } from 'services/backend/jobApplication'
  
const EditJobDescriptionForm = ({jobDescription, setJobDescription, setEditJobDescriptionFormIsOpen}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  let { id } = useParams();
  const [jobDescriptionInput, setJobDescriptionInput] = useState(jobDescription)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      job_description: jobDescriptionInput
    }
    
    let updatedJobApplication = await updateJobApplicationRequest(bearerToken, data, id)
    setJobDescription(updatedJobApplication.job_description)

    setEditJobDescriptionFormIsOpen(false)
  }

  return(
    <form onSubmit={handleSubmit}>
      <TextareaAutosize cols='38' value={jobDescriptionInput} onChange={(e) => setJobDescriptionInput(e.target.value)} placeholder='add a description' />
      <div className='justify-content-end mt-1'>
        <button type='submit' className='btn-primary'>Update</button>
        <button className='btn-secondary' onClick={() => setEditJobDescriptionFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default EditJobDescriptionForm
