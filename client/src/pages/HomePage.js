import React from 'react'
import { useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm'

const Home = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  if(!isAuthenticated) {
    return <div className='row justify-content-center'><LoginForm /></div>
  }

  return(
    <div>
      HomePage
    </div>
  )
}
  
export default Home
