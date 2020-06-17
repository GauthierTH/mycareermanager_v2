import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { getJobApplicationRequest } from '../services/backend/jobApplication'
import JobApplicationColumn from './JobApplicationColumn'
  
const JobApplicationSection = () => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  const [jobApplications, setJobApplications] = useState([])

  const getJobApplications = async () => {
    let jobApplications = await getJobApplicationRequest(bearerToken)
    setJobApplications(jobApplications)
  }

  useEffect(() => {
    getJobApplications()
  }, [])

  return(
    <div className='row justify-content-center'>
      <JobApplicationColumn title='IDENTIFIED' jobApplications={jobApplications.filter(jobApplication => jobApplication.status === 'identified')} />
      <JobApplicationColumn title='APPLIED' jobApplications={jobApplications.filter(jobApplication => jobApplication.status === 'applied')} />
      <JobApplicationColumn title='IN PROGRESS' jobApplications={jobApplications.filter(jobApplication => jobApplication.status === 'in_progress')} />
    </div>
  )
}
  
export default JobApplicationSection
