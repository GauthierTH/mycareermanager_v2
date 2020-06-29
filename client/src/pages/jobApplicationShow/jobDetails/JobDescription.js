import React, { useState } from 'react'
import SimpleFormat from '@16g/react-simple-format';

import EditJobDescriptionForm from './EditJobDescriptionForm'
import EditButton from 'components/EditButton'
  
const JobDescription = ({job_description}) => {
  const [editJobDescriptionFormIsOpen, setEditJobDescriptionFormIsOpen] = useState(false)
  const [jobDescription, setJobDescription] = useState(job_description)

  return(
    <div>
      <div className='row justify-content-between'>
        <h4>Job description</h4>
        <EditButton setEditItemFormIsOpen={setEditJobDescriptionFormIsOpen} />
      </div>
      {editJobDescriptionFormIsOpen ?
        <EditJobDescriptionForm jobDescription={jobDescription} setJobDescription={setJobDescription} setEditJobDescriptionFormIsOpen={setEditJobDescriptionFormIsOpen} />
        :
        jobDescription !== '' ? <SimpleFormat text={jobDescription} /> : 'add a description'
      }
    </div>
  )
}
  
export default JobDescription
