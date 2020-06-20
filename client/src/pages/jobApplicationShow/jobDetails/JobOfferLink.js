import React, { useState } from 'react'

import EditJobOfferLinkForm from './EditJobOfferLinkForm'
  
const JobOfferLink = ({job_offer_link}) => {
  const [editJobOfferLinkFormIsOpen, setEditJobOfferLinkFormIsOpen] = useState(false)
  const [jobOfferLink, setJobOfferLink] = useState(job_offer_link)

  return(
    <div>
      <div className='row m-0'>
        <h4>Job offer</h4>
        <button onClick={() => setEditJobOfferLinkFormIsOpen(true)}>edit</button>
      </div>
      {editJobOfferLinkFormIsOpen ?
        <EditJobOfferLinkForm jobOfferLink={jobOfferLink} setJobOfferLink={setJobOfferLink} setEditJobOfferLinkFormIsOpen={setEditJobOfferLinkFormIsOpen} />
        :
        jobOfferLink !== '' ? <a href={jobOfferLink} target="_blank">{jobOfferLink}</a> : 'add an offer'
      }
    </div>
  )
}
  
export default JobOfferLink
