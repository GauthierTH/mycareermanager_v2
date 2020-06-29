import React, { useState } from 'react'

import NextStepsColumn from './NextStepsColumn'
import PastStepsColumn from './PastStepsColumn'
  
const StepsSection = ({jobApplicationSteps}) => {
  const [steps, setSteps] = useState(jobApplicationSteps)

  return(
    <div className='step-section'>
      <NextStepsColumn 
        nextSteps={
          steps.filter(step => !step.is_done)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
        }
        steps={steps}
        setSteps={setSteps}
      />
      <PastStepsColumn 
        pastSteps={
          steps.filter(step => step.is_done)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
        }
        steps={steps}
        setSteps={setSteps}
      />
    </div>
  )
}
  
export default StepsSection
