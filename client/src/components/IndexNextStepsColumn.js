import React, { useState, useEffect } from 'react'

import { getNextStepsRequest } from '../services/backend/step'
  
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

      </div>
    </div>
  )
}
  
export default IndexNextStepsColumn
