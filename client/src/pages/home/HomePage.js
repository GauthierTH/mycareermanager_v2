import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'

import LoginForm from 'components/LoginForm'
import NextStepsColumn from './NextStepsColumn'
import JobApplicationSection from './JobApplicationSection'

const Home = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  if(!isAuthenticated) {
    return <div className='row justify-content-center'><LoginForm /></div>
  }

  return(
    <>
      <h1>
        {moment().format('LLLL')}
      </h1>
      <div className='lists'>
        <NextStepsColumn />
        <JobApplicationSection />
      </div>
    </>
  )
}
  
export default Home
