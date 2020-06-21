import React, { useState } from 'react'
import moment from 'moment'
import SimpleFormat from '@16g/react-simple-format';

import EditStepForm from './EditStepForm'
import IsDoneCheckbox from './IsDoneCheckbox'
import DeleteStepButton from './DeleteStepButton'
  
const StepCard = ({id, category, date, description, is_done, steps, setSteps}) => {
  const [updateStepFormIsOpen, setUpdateStepFormIsOpen] = useState(false)

  if(updateStepFormIsOpen) {
    return(
      <EditStepForm
        id={id}
        category={category}
        date={date}
        description={description}
        setUpdateStepFormIsOpen={setUpdateStepFormIsOpen}
        setSteps={setSteps}
        steps={steps}
      />
    )
  }
  return(
    <div className='card'>
      <div>{category}</div>
      <div>{moment(date).format('ddd, MMM D, h:mm a')}</div>
      <SimpleFormat text={description} />
      <div>{is_done}</div>
      <IsDoneCheckbox
        id={id}
        is_done={is_done}
        setSteps={setSteps}
        steps={steps}
      />
      <button onClick={() => setUpdateStepFormIsOpen(true)}>edit</button>
      <DeleteStepButton
        id={id}
        setSteps={setSteps}
        steps={steps}
      />
    </div>
  )
}
  
export default StepCard
