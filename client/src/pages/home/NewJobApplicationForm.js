import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { createJobApplicationRequest } from 'services/backend/jobApplication'
  
const NewJobApplicationForm = ({setNewJobApplicationFormIsOpen, title, setJobApplications, status, jobApplications}) => {
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
    <form onSubmit={handleSubmit} className='card'>
      <table>
        <tbody>
          <tr>
            <td className='text-right'><label>Company:</label></td>
            <td><input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Position:</label></td>
            <td><input type="text" value={position} onChange={(e) => setPosition(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Priority:</label></td>
            <td>
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option defaultValue="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className='text-right'><label>Status:</label></td>
            <td><input type="text" value={title} disabled /></td>
          </tr>
        </tbody>
      </table>

      <div className='justify-content-end mt-1'>
        <button className='btn-primary' type="submit">Create</button>
        <button className='btn-secondary' onClick={() => setNewJobApplicationFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default NewJobApplicationForm
