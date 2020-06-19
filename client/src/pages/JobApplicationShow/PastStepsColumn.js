import React from 'react'

import StepCard from './StepCard'
  
const PastStepsColumn = ({pastSteps}) => {
  return(
    <div>
      <div className='column-header'>
        <h2>Past Steps</h2>
      </div>
      <div className='column-body'>
        {pastSteps.map(step => 
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
  
export default PastStepsColumn
