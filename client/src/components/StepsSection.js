import React, { useState } from 'react'

import ShowNextStepsColumn from './ShowNextStepsColumn'
import ShowPastStepsColumn from './ShowPastStepsColumn'
  
const StepsSection = ({jobApplicationSteps}) => {
  const [steps, setSteps] = useState(jobApplicationSteps)

  return(
    <div>
      <ShowNextStepsColumn 
        nextSteps={steps.filter(step => !step.is_done)}
        steps={steps}
        setSteps={setSteps}
      />
      <ShowPastStepsColumn pastSteps={steps.filter(step => step.is_done)} />
    </div>
  )
}
  
export default StepsSection
