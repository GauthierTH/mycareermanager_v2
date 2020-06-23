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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>First name:</label>
        <input type="text" className="form-control" value={firstName} onChange={(e) => setFirsName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Last name:</label>
        <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone number:</label>
        <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Position:</label>
        <input type="text" className="form-control" value={position} onChange={(e) => setPosition(e.target.value)} />
      </div>
     
      <button type="submit" className="btn btn-primary">Create</button>

      <button onClick={() => setNewContactFormIsOpen(false)}>Cancel</button>
    </form>
  )
}
  
export default NewContactForm
