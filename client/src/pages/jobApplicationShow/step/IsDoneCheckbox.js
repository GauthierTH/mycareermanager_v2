import React from 'react'
import { useSelector } from 'react-redux';

import { updateStepRequest } from 'services/backend/step'
  
const IsDoneCheckbox = ({id, is_done, steps, setSteps}) => {
  const bearerToken = useSelector(state => state.user.bearerToken)

  const handleChange = async () => {
    let data = {
      is_done: !is_done
    }
    let updatedStep = await updateStepRequest(bearerToken, data, id)
    setSteps(steps.map(step => step.id === updatedStep.id ? updatedStep : step ))
  }

  return(
    <input type="checkbox" checked={is_done} onChange={handleChange} />
  )
}
  
export default IsDoneCheckbox
