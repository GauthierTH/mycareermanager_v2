import React, { useState } from 'react'
import moment from 'moment'
import SimpleFormat from '@16g/react-simple-format';

import EditStepForm from './EditStepForm'
import IsDoneCheckbox from './IsDoneCheckbox'
import DeleteStepButton from './DeleteStepButton'
import EditButton from 'components/EditButton'
import { formatStepCategoryHelper } from 'helpers/formatStepCategory'
  
const StepCard = ({id, category, date, description, is_done, steps, setSteps}) => {
  const [editStepFormIsOpen, setEditStepFormIsOpen] = useState(false)

  if(editStepFormIsOpen) {
    return(
      <EditStepForm
        id={id}
        category={category}
        date={date}
        description={description}
        setEditStepFormIsOpen={setEditStepFormIsOpen}
        setSteps={setSteps}
        steps={steps}
      />
    )
  }
  return(
    <div className='card'>
      <div className='row justify-content-between'>
        <div className='row'>
          <div className='badge orange-bright-background mr-1'>{formatStepCategoryHelper[category]}</div>
          <div className='badge orange-light-background'>{moment(date).format('ddd, MMM D, h::mm a')}</div>
        </div>
        <div className='align-items-center'>
          <IsDoneCheckbox
            id={id}
            is_done={is_done}
            setSteps={setSteps}
            steps={steps}
          />
          <EditButton setEditItemFormIsOpen={setEditStepFormIsOpen} />
          <DeleteStepButton
            id={id}
            setSteps={setSteps}
            steps={steps}
          />
        </div>
      </div>
      <SimpleFormat text={description} className='mt-1' />
    </div>
  )
}
  
export default StepCard
