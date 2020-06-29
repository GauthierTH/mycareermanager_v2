import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { updateJobApplicationRequest } from 'services/backend/jobApplication'
  
const EditJobOfferLinkForm = ({jobOfferLink, setJobOfferLink, setEditJobOfferLinkFormIsOpen}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  let { id } = useParams();
  const [jobOfferLinkInput, setJobOfferLinkInput] = useState(jobOfferLink)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      job_offer_url: jobOfferLinkInput
    }
    
    let updatedJobApplication = await updateJobApplicationRequest(bearerToken, data, id)
    setJobOfferLink(updatedJobApplication.job_offer_url)

    setEditJobOfferLinkFormIsOpen(false)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="url" value={jobOfferLinkInput} className='job-offer-edit' onChange={(e) => setJobOfferLinkInput(e.target.value)} placeholder='add an offer' />
      <div className='justify-content-end mt-1'>
        <button type="submit" className="btn-primary">Update</button>
        <button className='btn-secondary' onClick={() => setEditJobOfferLinkFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default EditJobOfferLinkForm
