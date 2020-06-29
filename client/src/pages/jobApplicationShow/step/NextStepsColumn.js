import React, { useState } from 'react'

import StepCard from './StepCard'
import NewStepForm from './NewStepForm'
import NewButton from 'components/NewButton'
  
const NextStepsColumn = ({nextSteps, setSteps, steps}) => {
  const [newStepFormIsOpen, setNewStepFormIsOpen] = useState(false)

  return(
    <div className='list next-step-list'>
      <div className='list-header'>
        <h2>Next Steps</h2>
        <NewButton setNewItemFormIsOpen={setNewStepFormIsOpen} />
      </div>
      <div className='list-body'>
        {newStepFormIsOpen && 
          <NewStepForm 
            setNewStepFormIsOpen={setNewStepFormIsOpen}
            setSteps={setSteps}
            steps={steps}
          />
        }

        {nextSteps.map(step => 
          <StepCard
            key={step.id}
            id={step.id}
            category={step.category}
            date={step.date}
            description={step.description}
            is_done={step.is_done}
            setSteps={setSteps}
            steps={steps}
          />
        )}
      </div>
    </div>
  )
}
  
export default NextStepsColumn
