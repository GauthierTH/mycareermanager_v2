import React from 'react'
import { useSelector } from 'react-redux';

import { deleteContactRequest } from 'services/backend/contact'
import DeleteButton from 'components/DeleteButton'
  
const DeleteContactButton = ({id, contacts, setContacts}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)

  const deleteContact = async () => {
    await deleteContactRequest(bearerToken, id)
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return <DeleteButton deleteItem={deleteContact} />
}
  
export default DeleteContactButton
