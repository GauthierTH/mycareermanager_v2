import React, { useState } from 'react'

import StepCard from './StepCard'
import plusSolid from 'assets/images/plus-solid.svg'
import CreateStepForm from './CreateStepForm'
  
const NextStepsColumn = ({nextSteps, setSteps, steps}) => {
  const [createStepFormIsOpen, setcreateStepFormIsOpen] = useState(false)

  return(
    <div>
      <div className='column-header'>
        <h2>Next Steps</h2>
        <img src={plusSolid} className='plus-solid' onClick={() => setcreateStepFormIsOpen(true)} />
      </div>
      <div className='column-body'>
        {createStepFormIsOpen && 
          <CreateStepForm 
            setcreateStepFormIsOpen={setcreateStepFormIsOpen}
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
          />
        )}
      </div>
    </div>
  )
}
  
export default NextStepsColumn
