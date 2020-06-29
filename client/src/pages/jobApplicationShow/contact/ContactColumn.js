import React, { useState } from 'react'

import NewContactForm from './NewContactForm'
import ContactCard from './ContactCard'
import NewButton from 'components/NewButton'
  
const ContactColumn = ({jobApplicationContacts}) => {
  const [newContactFormIsOpen, setNewContactFormIsOpen] = useState(false)
  const [contacts, setContacts] = useState(jobApplicationContacts)

  return(
    <div className='list'>
      <div className='list-header'>
        <h2>Contacts</h2>
        <NewButton setNewItemFormIsOpen={setNewContactFormIsOpen} />
      </div>
      <div className='list-body'>
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
