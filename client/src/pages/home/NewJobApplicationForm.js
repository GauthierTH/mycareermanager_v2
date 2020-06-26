import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { createJobApplicationRequest } from 'services/backend/jobApplication'
  
const NewJobApplicationForm = ({setcreateJobApplicationFormIsOpen, title, setJobApplications, status, jobApplications}) => {
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
            <td className='text-right'>Company: </td>
            <td><input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'>Position: </td>
            <td><input type="text" value={position} onChange={(e) => setPosition(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'>Priority: </td>
            <td>
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option defaultValue="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className='text-right'>Status: </td>
            <td><input type="text" value={title} disabled /></td>
          </tr>
        </tbody>
      </table>

      <div className='justify-content-end mt-1'>
        <button className='btn-primary mr-1' type="submit">Create</button>
        <button className='btn-secondary' onClick={() => setcreateJobApplicationFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default NewJobApplicationForm
