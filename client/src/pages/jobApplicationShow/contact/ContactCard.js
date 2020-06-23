import React, { useState } from 'react'

import EditContactForm from './EditContactForm'
import DeleteContactButton from './DeleteContactButton'
  
const ContactCard = ({id, email, firstName, lastName, phoneNumber, position, contacts, setContacts}) => {
  const [editContactFormIsOpen, setEditContactFormIsOpen] = useState(false)
  
  if(editContactFormIsOpen) {
    return(
      <EditContactForm
        id={id}
        email={email}
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        position={position}
        setEditContactFormIsOpen={setEditContactFormIsOpen}
        contacts={contacts}
        setContacts={setContacts}
      />
    )
  }
  return(
    <div className='card'>
      <div>{email}</div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{phoneNumber}</div>
      <div>{position}</div>
      <button onClick={() => setEditContactFormIsOpen(true)}>edit</button>
      <DeleteContactButton
        id={id}
        contacts={contacts}
        setContacts={setContacts}
      />
    </div>
  )
}
  
export default ContactCard
