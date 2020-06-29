import React from 'react'

import StepCard from './StepCard'
  
const PastStepsColumn = ({pastSteps, steps, setSteps}) => {
  return(
    <div className='list'>
      <div className='list-header'>
        <h2>Past Steps</h2>
      </div>
      <div className='list-body'>
        {pastSteps.map(step => 
          <StepCard
            key={step.id}
            id={step.id}
            category={step.category}
            date={step.date}
            description={step.description}
            is_done={step.is_done}
            steps={steps}
            setSteps={setSteps}
          />
        )}
      </div>
    </div>
  )
}
  
export default PastStepsColumn
