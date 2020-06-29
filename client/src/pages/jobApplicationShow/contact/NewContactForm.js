import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { createContactRequest } from 'services/backend/contact'
  
const NewContactForm = ({setNewContactFormIsOpen, setContacts, contacts}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  let { id } = useParams();
  const [email, setEmail] = useState('')
  const [firstName, setFirsName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [position, setPosition] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      position: position
    }
    
    let contact = await createContactRequest(bearerToken, data, id)
    setContacts([...contacts, contact])

    setNewContactFormIsOpen(false)
  }

  return(
    <form onSubmit={handleSubmit} className='card'>
      <table>
        <tbody>
          <tr>
            <td className='text-right'><label>Email:</label></td>
            <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>First name:</label></td>
            <td><input type="text" value={firstName} onChange={(e) => setFirsName(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Last name:</label></td>
            <td><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Phone number:</label></td>
            <td><input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></td>
          </tr>
          <tr>
            <td className='text-right'><label>Position:</label></td>
            <td><input type="text" value={position} onChange={(e) => setPosition(e.target.value)} /></td>
          </tr>
        </tbody>
      </table>
        
      <div className='justify-content-end mt-1'>
        <button type="submit" className="btn-primary">Create</button>
        <button className='btn-secondary' onClick={() => setNewContactFormIsOpen(false)}>Cancel</button>
      </div>
    </form>
  )
}
  
export default NewContactForm
