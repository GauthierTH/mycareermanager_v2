import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { getJobApplicationRequest } from '../services/backend/jobApplication'
import StepsSection from '../components/StepsSection'
  
const JobApplicationShowPage = () => {
  let { id } = useParams();
  const bearerToken = useSelector(state => state.user.bearerToken)
  const [jobApplication, setJobApplication] = useState({})

  const getJobApplication = async () => {
    let jobApplication = await getJobApplicationRequest(bearerToken, id)
    setJobApplication(jobApplication)
  }

  useEffect(() => {
    getJobApplication()
  }, [])

  return(
    <div className='row m-0'>
      {Object.keys(jobApplication).length !== 0 && <StepsSection jobApplicationSteps={jobApplication.steps} />}
      <div>
        <div>
          <h1>{jobApplication.position} at {jobApplication.company_name}</h1>
        </div>
        <div className='row'>
          {/* <JobDetailsColumn />
          <Note />
          <Contacts /> */}
        </div>
      </div>
    </div>
  )
}
  
export default JobApplicationShowPage
