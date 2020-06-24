import React from 'react'
import { useSelector } from 'react-redux';

import { deleteContactRequest } from 'services/backend/contact'
  
const DeleteContactButton = ({id, contacts, setContacts}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)

  const handleClick = async () => {
    await deleteContactRequest(bearerToken, id)
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return(
    <button onClick={handleClick}>delete</button>
  )
}
  
export default DeleteContactButton
