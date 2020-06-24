import React from 'react'
import { useSelector } from 'react-redux';

import { deleteStepRequest } from 'services/backend/step'
  
const DeleteStepButton = ({id, steps, setSteps}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)

  const handleClick = async () => {
    await deleteStepRequest(bearerToken, id)
    setSteps(steps.filter(step => step.id !== id))
  }

  return(
    <button onClick={handleClick}>delete</button>
  )
}
  
export default DeleteStepButton
