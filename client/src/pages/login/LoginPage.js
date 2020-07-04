import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { login } from 'services/backend/authentication'
import store from 'redux/store';
import rocketIcon from 'assets/images/rocket-icon.svg'
  
const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: emailInput,
      password: passwordInput
    }

    await store.dispatch(login(data))
    history.replace(from)
  }

  return(
    <>
      <div></div>
      <div></div>
      <div>
        <div className='card auth-card'>
          <div className='align-items-center'>
            <img src={rocketIcon} className="rocket-icon" alt='rocket-icon' />
            My Career Manager
          </div>

          <form onSubmit={handleSubmit} className='auth-form'>
            <input type='email' className='mb-1 auth-input' placeholder='Email' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
            <input type='password' className='mb-2 auth-input' placeholder='Password' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
            <button type='submit' className='btn-primary m-0'>Log In</button>
          </form>

          <Link to='/'>Forgot password?</Link>
          <hr className='w-100' />
          <div className='row align-items-center'>
            <span className='mr-1'>Don't have an account?</span>
            <Link to='/register'>Register</Link>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default LoginPage

