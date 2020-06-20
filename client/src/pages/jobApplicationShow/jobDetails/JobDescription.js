import React from 'react'
  
const JobDescription = ({job_description}) => {
  return(
    <div>
      <h4>Job description</h4>
      <div>{job_description}</div>
    </div>
  )
}
  
export default JobDescription
