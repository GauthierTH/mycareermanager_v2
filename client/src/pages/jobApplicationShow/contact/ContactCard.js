import React, { useState } from 'react'

import EditContactForm from './EditContactForm'
import DeleteContactButton from './DeleteContactButton'
import EditButton from 'components/EditButton'
import { displayAttributeIfPresentHelper } from 'helpers/displayAttributeIfPresent'
  
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
    <div className='card row justify-content-between'>
      <table>
        <tbody>
          {displayAttributeIfPresentHelper(email, 'Email')}
          {displayAttributeIfPresentHelper(firstName, 'First name')}
          {displayAttributeIfPresentHelper(lastName, 'Last name')}
          {displayAttributeIfPresentHelper(phoneNumber, 'Phone number')}
          {displayAttributeIfPresentHelper(position, 'Position')}
        </tbody>
      </table>
      <div className='row pt-1 ml-1'>
        <EditButton setEditItemFormIsOpen={setEditContactFormIsOpen} />
        <DeleteContactButton id={id} contacts={contacts} setContacts={setContacts} />
      </div>
    </div>
  )
}
  
export default ContactCard
