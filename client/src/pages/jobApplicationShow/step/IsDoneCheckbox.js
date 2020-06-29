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

  const style = {
    width: '17.5px',
    height: '17.5px',
    margin: '2.5px'
  }

  return(
    <input type="checkbox" checked={is_done} onChange={handleChange} style={style} />
  )
}
  
export default IsDoneCheckbox
