import React, { useState } from 'react'

import plusSolid from 'assets/images/plus-solid.svg'
import NewContactForm from './NewContactForm'
import ContactCard from './ContactCard'
  
const ContactColumn = ({jobApplicationContacts}) => {
  const [newContactFormIsOpen, setNewContactFormIsOpen] = useState(false)
  const [contacts, setContacts] = useState(jobApplicationContacts)

  return(
    <div className='col-4'>
      <div className='column-header'>
        <h2>Contacts</h2>
        <img src={plusSolid} className='plus-solid' onClick={() => setNewContactFormIsOpen(true)} />
      </div>
      <div className='column-body'>
        {newContactFormIsOpen && 
          <NewContactForm 
            setNewContactFormIsOpen={setNewContactFormIsOpen}
            setContacts={setContacts}
            contacts={contacts}
          />
        }

        {contacts.map(contact => 
          <ContactCard
            key={contact.id}
            id={contact.id}
            email={contact.email}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phoneNumber={contact.phone_number}
            position={contact.position}
            setContacts={setContacts}
            contacts={contacts}
          />
        )}
      </div>
    </div>
  )
}
  
export default ContactColumn
