import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { getJobApplicationsRequest } from 'services/backend/jobApplication'
import JobApplicationColumn from './JobApplicationColumn'
  
const JobApplicationSection = () => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  const [jobApplications, setJobApplications] = useState([])

  const getJobApplications = async () => {
    let jobApplications = await getJobApplicationsRequest(bearerToken)
    setJobApplications(jobApplications)
  }

  useEffect(() => {
    getJobApplications()
  }, [])

  return(
    <>
      <JobApplicationColumn 
        status='identified' 
        title='Identified' 
        setJobApplications={setJobApplications}
        jobApplications={jobApplications}
        columnJobApplications={jobApplications.filter(jobApplication => jobApplication.status === 'identified')} 
      />
      <JobApplicationColumn 
        status='applied' 
        title='Applied' 
        setJobApplications={setJobApplications}
        jobApplications={jobApplications}
        columnJobApplications={jobApplications.filter(jobApplication => jobApplication.status === 'applied')} 
      />
      <JobApplicationColumn 
        status='in_progress' 
        title='In progress' 
        setJobApplications={setJobApplications}
        jobApplications={jobApplications}
        columnJobApplications={jobApplications.filter(jobApplication => jobApplication.status === 'in_progress')} 
      />
    </>
  )
}
  
export default JobApplicationSection
