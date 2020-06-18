import React from 'react'

import ShowStepCard from './ShowStepCard'
  
const ShowPastStepsColumn = ({pastSteps}) => {
  return(
    <div>
      <div className='column-header'>
        <h2>Past Steps</h2>
      </div>
      <div className='column-body'>
        {pastSteps.map(step => 
          <ShowStepCard
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
  
export default ShowPastStepsColumn
