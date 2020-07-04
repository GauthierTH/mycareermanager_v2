import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'

import LoginPage from 'pages/login/LoginPage'
import NextStepsColumn from './NextStepsColumn'
import JobApplicationSection from './JobApplicationSection'

const Home = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  if(!isAuthenticated) {
    return <LoginPage />
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
