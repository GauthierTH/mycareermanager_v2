import React, { useState } from 'react'

import EditJobOfferLinkForm from './EditJobOfferLinkForm'
import EditButton from 'components/EditButton'
  
const JobOfferLink = ({job_offer_url}) => {
  const [editJobOfferLinkFormIsOpen, setEditJobOfferLinkFormIsOpen] = useState(false)
  const [jobOfferLink, setJobOfferLink] = useState(job_offer_url)

  return(
    <div>
      <div className='row justify-content-between'>
        <h4>Job offer</h4>
        <EditButton setEditItemFormIsOpen={setEditJobOfferLinkFormIsOpen} />
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
