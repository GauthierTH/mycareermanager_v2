import React from 'react'
import { useSelector } from 'react-redux';

import { deleteStepRequest } from 'services/backend/step'
import DeleteButton from 'components/DeleteButton'
  
const DeleteStepButton = ({id, steps, setSteps}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)

  const deleteStep = async () => {
    await deleteStepRequest(bearerToken, id)
    setSteps(steps.filter(step => step.id !== id))
  }

  return <DeleteButton deleteItem={deleteStep} />
}
  
export default DeleteStepButton
