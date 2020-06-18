import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { createJobApplicationRequest } from '../services/backend/jobApplication'
  
const CreateJobApplicationForm = ({setcreateJobApplicationFormIsOpen, title, setJobApplications, status, jobApplications}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  let history = useHistory();
  const [companyName, setCompanyName] = useState('')
  const [position, setPosition] = useState('')
  const [priority, setPriority] = useState('low')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      company_name: companyName,
      position: position,
      priority: priority,
      status: status
    }
    let jobApplication = await createJobApplicationRequest(bearerToken, data)
    setJobApplications([...jobApplications, jobApplication])
    
    history.push(`/job-application/${jobApplication.id}`)
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Company:</label>
        <input type="text" className="form-control" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Position:</label>
        <input type="text" className="form-control" value={position} onChange={(e) => setPosition(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option defaultValue="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
      <div className="form-group">
        <label>Status:</label>
        <input type="text" value={title} disabled />
      </div>
      <button type="submit" className="btn btn-primary">Create</button>

      <button onClick={() => setcreateJobApplicationFormIsOpen(false)}>Cancel</button>
    </form>
  )
}
  
export default CreateJobApplicationForm
