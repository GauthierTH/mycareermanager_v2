import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

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
      <input type="text" className="form-control" value={jobDescriptionInput} onChange={(e) => setJobDescriptionInput(e.target.value)} placeholder='add a description' />
      <button type="submit" className="btn btn-primary">Update</button>

      <button onClick={() => setEditJobDescriptionFormIsOpen(false)}>Cancel</button>
    </form>
  )
}
  
export default EditJobDescriptionForm
