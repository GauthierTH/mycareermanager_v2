import React, { useState } from 'react'

import NextStepsColumn from './NextStepsColumn'
import PastStepsColumn from './PastStepsColumn'
  
const StepsSection = ({jobApplicationSteps}) => {
  const [steps, setSteps] = useState(jobApplicationSteps)

  return(
    <div className='col-3'>
      <NextStepsColumn 
        nextSteps={steps.filter(step => !step.is_done)}
        steps={steps}
        setSteps={setSteps}
      />
      <PastStepsColumn 
        pastSteps={steps.filter(step => step.is_done)}
        steps={steps}
        setSteps={setSteps}
      />
    </div>
  )
}
  
export default StepsSection
