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
    <form onSubmit={handleSubmit} className='card'>
      <table>
        <tbody>
          <tr>
            <td className='text-right'><label>Email:</label></td>
            <td><input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>First name:</label></td>
            <td><input type="text" value={firstNameInput} onChange={(e) => setFirsNameInput(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Last name:</label></td>
            <td><input type="text" value={lastNameInput} onChange={(e) => setLastNameInput(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Phone number:</label></td>
            <td><input type="text" value={phoneNumberInput} onChange={(e) => setPhoneNumberInput(e.target.value)} /></td> 
          </tr>
          <tr>
            <td className='text-right'><label>Position:</label></td>
            <td><input type="text" value={positionInput} onChange={(e) => setPositionInput(e.target.value)} /></td>
          </tr>
        </tbody>
      </table>

      <div className='justify-content-end mt-1'>
        <button type="submit" className="btn-primary">Update</button>
        <button className='btn-secondary' onClick={() => setEditContactFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default EditContactForm
