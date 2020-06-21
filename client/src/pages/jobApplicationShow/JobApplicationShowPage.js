import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { getJobApplicationRequest } from 'services/backend/jobApplication'
import StepsSection from './step/StepsSection'
import JobDetailsColumn from './jobDetails/JobDetailsColumn'
  
const JobApplicationShowPage = () => {
  let { id } = useParams();
  const bearerToken = useSelector(state => state.user.bearerToken)
  const [jobApplication, setJobApplication] = useState({})

  const getJobApplication = async () => {
    let jobApplication = await getJobApplicationRequest(bearerToken, id)
    console.log(jobApplication)
    setJobApplication(jobApplication)
  }

  useEffect(() => {
    getJobApplication()
  }, [])

  if(Object.keys(jobApplication).length !== 0) {
    return(
      <div className='row m-0'>
        <StepsSection jobApplicationSteps={jobApplication.steps} />
        <div className='col-9'>
          <div>
            <h1>{jobApplication.position} at {jobApplication.company_name}</h1>
          </div>
          <div className='row m-0'>
            <JobDetailsColumn job_offer_link={jobApplication.job_offer_link} job_description={jobApplication.job_description} />
            {/* <Note />
            <Contacts /> */}
          </div>
        </div>
      </div>
    )
  }
  return <div></div>
}
  
export default JobApplicationShowPage
