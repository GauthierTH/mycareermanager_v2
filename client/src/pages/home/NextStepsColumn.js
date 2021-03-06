import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { getNextStepsRequest } from 'services/backend/step'
import NextStepCard from './NextStepCard'
  
const NextStepsColumn = () => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  const [nextSteps, setNextSteps] = useState([])

  const getNextSteps = async () => {
    let nextSteps = await getNextStepsRequest(bearerToken)
    setNextSteps(nextSteps)
  }

  useEffect(() => {
    getNextSteps()
  }, [])

  return(
    <div className='list'>
      <div className='list-header'>
        <h2>Next Steps</h2>
      </div>
      <div className='list-body'>
        {nextSteps.map(step => 
          <NextStepCard
            key={step.id}
            category={step.category}
            date={step.date}
            company_name={step.job_application.company_name}
            position={step.job_application.position}
            jobApplicationId={step.job_application.id}
          />
        )}
      </div>
    </div>
  )
}
  
export default NextStepsColumn
