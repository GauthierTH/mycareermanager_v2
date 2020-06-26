import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { getJobApplicationRequest } from 'services/backend/jobApplication'
import StepsSection from './step/StepsSection'
import JobDetailsColumn from './jobDetails/JobDetailsColumn'
import NoteColumn from './note/NoteColumn'
import ContactColumn from './contact/ContactColumn'
  
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
      <>
        <h1>{jobApplication.position} at {jobApplication.company_name}</h1>
        <div className='lists'>
          <StepsSection jobApplicationSteps={jobApplication.steps} />
          <JobDetailsColumn job_offer_url={jobApplication.job_offer_url} job_description={jobApplication.job_description} />
          <NoteColumn jobApplicationNote={jobApplication.note} />
          <ContactColumn jobApplicationContacts={jobApplication.contacts} />
        </div>
      </>
    )
  }
  return <></>
}
  
export default JobApplicationShowPage
