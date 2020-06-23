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
      <input type="url" className="form-control" value={jobOfferLinkInput} onChange={(e) => setJobOfferLinkInput(e.target.value)} placeholder='add an offer' />
      <button type="submit" className="btn btn-primary">Update</button>

      <button onClick={() => setEditJobOfferLinkFormIsOpen(false)}>Cancel</button>
    </form>
  )
}
  
export default EditJobOfferLinkForm
