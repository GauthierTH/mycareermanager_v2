import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { getNextStepsRequest } from '../services/backend/step'
import IndexNextStepCard from './IndexNextStepCard'
  
const IndexNextStepsColumn = () => {
  const bearerToken = useSelector(state => state.user.bearerToken)
  const [nextSteps, setNextSteps] = useState([])

  const getNextSteps = async () => {
    let nextSteps = await getNextStepsRequest(bearerToken)
    console.log(nextSteps)
    setNextSteps(nextSteps)
  }

  useEffect(() => {
    getNextSteps()
  }, [])

  return(
    <div>
      <div className='card-header'>
        <h2>Next Steps</h2>
      </div>
      <div className='card-body'>
        {nextSteps.map(step => 
          <IndexNextStepCard
            key={step.id}
            category={step.category}
            date={step.date}
            company_name={step.job_application.company_name}
            position={step.job_application.position}
          />
        )}
      </div>
    </div>
  )
}
  
export default IndexNextStepsColumn
