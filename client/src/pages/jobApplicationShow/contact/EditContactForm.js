import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { updateContactRequest } from 'services/backend/contact'
  
const EditContactForm = ({id, email, firstName, lastName, phoneNumber, position, setEditContactFormIsOpen, contacts, setContacts}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  const [emailInput, setEmailInput] = useState(email)
  const [firstNameInput, setFirsNameInput] = useState(firstName)
  const [lastNameInput, setLastNameInput] = useState(lastName)
  const [phoneNumberInput, setPhoneNumberInput] = useState(phoneNumber)
  const [positionInput, setPositionInput] = useState(position)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      email: emailInput,
      first_name: firstNameInput,
      last_name: lastNameInput,
      phone_number: phoneNumberInput,
      position: positionInput
    }
    
    let updatedContact = await updateContactRequest(bearerToken, data, id)
    setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact ))

    setEditContactFormIsOpen(false)
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
      </div>
      <div className="form-group">
        <label>First name:</label>
        <input type="text" className="form-control" value={firstNameInput} onChange={(e) => setFirsNameInput(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Last name:</label>
        <input type="text" className="form-control" value={lastNameInput} onChange={(e) => setLastNameInput(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone number:</label>
        <input type="text" className="form-control" value={phoneNumberInput} onChange={(e) => setPhoneNumberInput(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Position:</label>
        <input type="text" className="form-control" value={positionInput} onChange={(e) => setPositionInput(e.target.value)} />
      </div>
     
      <button type="submit" className="btn btn-primary">Update</button>

      <button onClick={() => setEditContactFormIsOpen(false)}>Cancel</button>
    </form>
  )
}
  
export default EditContactForm
