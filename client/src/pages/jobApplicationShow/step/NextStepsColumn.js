import React, { useState } from 'react'

import StepCard from './StepCard'
import plusSolid from 'assets/images/plus-solid.svg'
import NewStepForm from './NewStepForm'
  
const NextStepsColumn = ({nextSteps, setSteps, steps}) => {
  const [newStepFormIsOpen, setNewStepFormIsOpen] = useState(false)

  return(
    <div>
      <div className='column-header'>
        <h2>Next Steps</h2>
        <img src={plusSolid} className='plus-solid' onClick={() => setNewStepFormIsOpen(true)} />
      </div>
      <div className='column-body'>
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
